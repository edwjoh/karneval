import { useEffect, useState } from "react";

import submit_end from "../api/submit_end";
import Map_box from "../components/Map_box";
import Loader from "../components/Loader";

function Main_page() {
	const [position, set_position] = useState({
		lat: 55.7029,
		long: 13.1947,
	});
	const [show_error, set_show_error] = useState(false);
	const [show_success, set_show_success] = useState(false);
	const [is_loading, set_is_loading] = useState(false);

	async function post_poistion() {
		set_is_loading(true);
		const res = await submit_end(position);
		set_is_loading(false);

		if (res) {
			set_show_success(true);

			setTimeout(() => set_show_success(false), 1000);
		} else {
			set_show_error(true);

			setTimeout(() => set_show_error(false), 1000);
		}
	}

	function position_setter() {
		navigator.geolocation.getCurrentPosition((pos) => {
			set_position({ lat: pos.coords.latitude, long: pos.coords.longitude });
		});
	}

	useEffect(() => {
		position_setter();
		const interval_id = setInterval(() => {
			position_setter();
		}, 5000);

		return () => clearInterval(interval_id);
	}, []);

	useEffect(() => {
		console.log(position);
	}, [position]);

	return (
		<div className="flex flex-col gap-4 p-4 h-full">
			{show_success && (
				<div className="absolute top-20 right-1 bg-green-300 rounded-full p-4 z-20">
					Location successfully submitted
				</div>
			)}
			{show_error && (
				<div className="absolute top-20 right-1 bg-red-300 rounded-full p-4 shadow-lg z-20">
					Location unsuccessfully submitted
				</div>
			)}

			<div className="w-full h-full rounded">
				<Map_box position={position} />
			</div>

			<button
				onClick={() => post_poistion()}
				className="p-4 rounded w-full bg-red-400 flex items-center justify-center"
			>
				{is_loading ? <Loader /> : "Submit location"}
			</button>
		</div>
	);
}

export default Main_page;
