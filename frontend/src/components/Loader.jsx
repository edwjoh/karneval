function Loader({ color, bg }) {
    return (
        <div className={`h-6 w-6 animate-spin rounded-full border-2 relative border-${color}`}>
            <div className={` h-1.5 w-6 rounded-t-xl absolute -top-0.5 -left-0.5 bg-${bg}`}></div>
        </div>
    );
}

export default Loader;
