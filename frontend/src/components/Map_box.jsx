import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const position = [55.72248, 13.2128];

export default function Map_box() {
	return (
		<MapContainer
			center={position}
			zoom={15}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%", zIndex: 2, borderRadius: "14px" }}
		>
			<TileLayer
				url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${"y79r0d3305U62Jkfz2tGHQq2Qmuea0rxf2YIBeeJbTjqvQ2yuyxHZJi0fMANL8MZ"}`}
				attribution='&copy; <a href="http://jawg.io">Jawg</a>'
			/>
		</MapContainer>
	);
}
