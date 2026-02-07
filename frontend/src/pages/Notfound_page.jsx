import Back_icon from "../icons/Back_icon";

export default function Notfound_page() {
	return (
		<div className="text-4xl flex items-center justify-center h-full">
			<a href="/" className="flex items-center gap-2">
				<div className="text-4xl">Gå till karta</div>
				<Back_icon size="48" />
			</a>
		</div>
	);
}
