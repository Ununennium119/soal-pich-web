import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Content = ({children, header, subHeader, headerRoute}) => {
    return (
        <div className="d-flex flex-column w-100 h-100 p-5" style={{marginLeft: '250px'}}>
            <div className='d-flex flex-row w-100 border-bottom border-dark mb-4'>
                <h1>
                    {
                        headerRoute ?
                            <Link
                                to={headerRoute}
                                className='text-decoration-none'>
                                <span>{header}</span>
                            </Link> : header
                    }
                    {subHeader ? (<span> &#x276D; {subHeader}</span>) : null}
                </h1>
            </div>
            <div className="d-flex flex-column w-100 align-items-center">
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
}

export default Content