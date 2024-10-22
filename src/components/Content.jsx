import '../scss/_content.scss'

const Content = ({children, header}) => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <h1>{header}</h1>
            </div>
            <div className="content">
            {children}
            </div>
        </div>
    )
}

export default Content