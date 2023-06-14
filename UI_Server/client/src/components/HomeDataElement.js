const HomeDataElement = ({ name, value }) => {
    return (
        <div className={"home-data"}>
            <div className={"home-data-name"}>{name}</div>
            <div className={"home-data-value"}>{value}</div>
        </div>
    );
}

export default HomeDataElement;