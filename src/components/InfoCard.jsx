const InfoCard = ({title, value, color}) => {
    return (
        <div
            className="d-block p-2 border-secondary-subtle border-1 rounded-2 p-4 m-3"
            style={{borderStyle: "solid", width: "300px"}}
        >
            <div className="d-flex col align-items-center mb-3">
                        <span className="d-inline-block me-2"
                              style={{width: "10px", height: "10px", borderRadius: "10px", backgroundColor: color}}
                        ></span>
                <h5 className="m-0">{title}</h5>
            </div>
            <h4>{value}</h4>
        </div>
    )
}

export default InfoCard;