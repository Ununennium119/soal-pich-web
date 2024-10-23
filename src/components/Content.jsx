import '../scss/_content.scss'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Content = ({children, header, subHeader, headerRoute, contentHeaderId, contentId}) => {
    return (
        <div className="content-wrapper">
            <div className="content-header" id={contentHeaderId}>
                <h1>
                    {headerRoute ? <Link to={headerRoute}><span>{header}</span></Link> : header}
                    {subHeader ? (<span> &#x276D; {subHeader}</span>) : null}
                </h1>
            </div>
            <div className="content" id={contentId}>
                {children}
            </div>
        </div>
    )
}
Content.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
    headerRoute: PropTypes.string,
    subHeader: PropTypes.string,
    contentHeaderId: PropTypes.string,
    contentId: PropTypes.string,
}

export default Content