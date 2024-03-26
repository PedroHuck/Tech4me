const Box = ({ children }) => {
    const style = {
        width: "700px",
        height: "500px",
        backgroundColor: "rgb(143, 143, 143)",
        color: "rgb(0, 0, 0)",
        padding: "20px"
}
return <div className="box" style={style}>{children}</div>;
};

export default Box