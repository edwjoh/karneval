function Loader({ color, size }) {
    return (
        <div
            style={{ height: size, width: size }}
            className={`animate-spin rounded-full border-2 border-${color} border-t-transparent`}
        />
    );
}

export default Loader;
