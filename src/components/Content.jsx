import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Content = ({children, header, subHeader, headerRoute}) => {
    return (
        <div className="card d-flex flex-column w-100 rounded-0 overflow-scroll" style={{marginLeft: '220px'}}>
            <div className='card-header pt-3 ps-4'>
                <h3 className="fw-bold">
                    {
                        headerRoute ?
                            <Link
                                to={headerRoute}
                                className='text-decoration-none'>
                                <span>{header}</span>
                            </Link> : header
                    }
                    {subHeader ? (<span> &#x276D; {subHeader}</span>) : null}
                </h3>
            </div>
            <div className="card-body d-flex flex-column w-100 align-items-center p-4">
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