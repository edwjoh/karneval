import Header from "./components/Header";
import Router from "./Router";

function Layout() {
	return (
		<div className="h-svh bg-background w-screen max-w-125 mx-auto flex flex-col">
			<Header />
			<div className="grow">
				<Router />
			</div>
		</div>
	);
}

export default Layout;
