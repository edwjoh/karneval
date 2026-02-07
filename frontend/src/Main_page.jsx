import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import Header from "./components/Header";
import submit_end from "./api/submit_end";
import Map_box from "./components/Map_box";

function Main_page() {
	const [position, set_position] = useState({
		lat: null,
		long: null,
	});
	const [show_error, set_show_error] = useState(false);
	const [show_success, set_show_success] = useState(false);

	async function post_poistion() {
		const res = await submit_end(position);

		if (res) {
			set_show_success(true);

			setTimeout(() => set_show_success(false), 1000);
		} else {
			set_show_error(true);

			setTimeout(() => set_show_error(false), 1000);
		}
	}

	useEffect(() => {
		const interval_id = setInterval(() => {
			navigator.geolocation.getCurrentPosition((pos) => {
				set_position({ lat: pos.coords.latitude, long: pos.coords.longitude });
			});
		}, 500000);

		return () => clearInterval(interval_id);
	}, []);

	useEffect(() => {
		console.log(position);
	}, [position]);

	return (
		<Layout
			header={<Header />}
			main={
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

					<div className="grow p-2 w-full rounded-xl">
						<Map_box />
					</div>

					<button onClick={() => post_poistion()} className="p-4 rounded-full w-full bg-blue-100">
						Submit location
					</button>
				</div>
			}
		/>
	);
}

export default Main_page;
