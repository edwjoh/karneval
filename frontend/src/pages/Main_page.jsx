import { useEffect, useState } from "react";
import submit_end from "../api/submit_end";
import get_end from "../api/get_end";
import Map_box from "../components/Map_box";
import Loader from "../components/Loader";
import Check_icon from "../icons/Check_icon";
import X_icon from "../icons/X_icon";
import coords_distance from "../misc/distance";

const DEFAULT_POSITION = { lat: 55.7029, long: 13.1947 };
const MAX_DISTANCE = 500;

function Main_page() {
	const default_text = "Längst bak i kön? Dela och hjälp andra";

	const [submit_content, set_submit_content] = useState(default_text);
	const [is_loading_end_position, set_is_loading_end_position] = useState(true);
	const [user_position, set_user_position] = useState(null);
	const [end_position, set_end_position] = useState(DEFAULT_POSITION);
	const [has_location_permission, set_has_location_permission] = useState(false);

	function is_in_range() {
		if (!user_position) return false;
		const distance = coords_distance(user_position, end_position);
		return distance < MAX_DISTANCE;
	}

	async function load_end_position() {
		const data = await get_end();
		if (data) {
			set_end_position(data);
			set_is_loading_end_position(false);
		}
	}

	async function post_position() {
		if (!user_position) return;

		set_submit_content(<Loader color="black" size="24px" />);
		const res = await submit_end(user_position);
		const message = res ? <Check_icon /> : <X_icon />;

		setTimeout(() => {
			set_submit_content(message);
			setTimeout(() => set_submit_content(default_text), 2000);
		}, 1000);
	}

	function request_user_position(on_success) {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const new_position = {
					lat: pos.coords.latitude,
					long: pos.coords.longitude,
				};
				set_user_position(new_position);
				set_has_location_permission(true);
				if (on_success) {
					on_success(new_position);
				}
			},
			(error) => {
				console.error("Location error:", error);
				set_has_location_permission(false);
				return null;
			},
		);
	}

	useEffect(() => {
		if (!has_location_permission) return;

		const interval_id = setInterval(request_user_position, 5000);
		return () => clearInterval(interval_id);
	}, [has_location_permission]);

	useEffect(() => {
		load_end_position();
		const interval_id = setInterval(load_end_position, 120000);
		return () => clearInterval(interval_id);
	}, []);

	return (
		<div className="flex flex-col gap-4 p-4 h-full">
			<div className="w-full h-full rounded relative">
				{is_loading_end_position && <Loader_display />}
				<Map_box
					user_position={user_position}
					end_position={end_position}
					on_request_location={request_user_position}
				/>
			</div>
			<button
				disabled={!is_in_range() || submit_content !== default_text}
				onClick={post_position}
				className="p-4 w-full bg-special flex items-center justify-center disabled:opacity-30 shadow rounded-lg h-24"
			>
				{submit_content}
			</button>
		</div>
	);
}

export default Main_page;

function Loader_display() {
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="bg-black/50 w-full h-full flex justify-center items-center z-20 absolute top-0 left-0"
		>
			<Loader color="white" size="48px" />
		</div>
	);
}
