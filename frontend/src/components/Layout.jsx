function Layout({ header, main }) {
	return (
		<div className="h-screen w-screen max-w-125 mx-auto flex flex-col">
			<div className="">{header}</div>
			<div className="h-full">{main}</div>
		</div>
	);
}

export default Layout;
