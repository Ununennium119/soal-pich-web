import Content from "../../components/Content";
import '../../scss/designer/_designer_questions.scss'
import Pagination from "../../components/Pagination";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import DesignerSidebar from "../../components/DesignerSidebar";

const CategoriesList = ({count}) => {
    const navigate = useNavigate()
    return (
        <div className="list-group scrollable-list" id="categoryList">
            {[...Array(count)].map((_, index) => (
                <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                        navigate(`/player/question/${index}/answer`);
                    }}
                >
                    Category {index}
                </button>
            ))}
        </div>
    );
};
CategoriesList.propTypes = {
    count: PropTypes.number.isRequired,
}

const DesignerQuestions = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header='Questions'
                headerId='designer-questions-content-header'
                contentId='designer-questions-content'
            >
                <div className="filter">
                    <div>
                        <label htmlFor='title-input' className='form-label'>Title</label>
                        <input type="text" className="form-control" id="title-input" placeholder="Filter by title..."/>
                    </div>

                    <div>
                        <label htmlFor='category-filter' className='form-label'>Category</label>
                        <select className="form-control" id="category-filter">
                            <option value="">All</option>
                            <option value="Admin">Sports</option>
                            <option value="User">Mathematics</option>
                            <option value="Editor">General</option>
                        </select>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                        <td>Question #1</td>
                        <td>Sports</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Link className="dropdown-item" to='/designer/question/1/view'>View</Link>
                                    <Link className="dropdown-item" to='/designer/question/1/edit'>Edit</Link>
                                    <Link className="dropdown-item" to='/designer/question/1/delete'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Question #2</td>
                        <td>Mathematics</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <Link className="dropdown-item" to='/designer/question/2/view'>View</Link>
                                    <Link className="dropdown-item" to='/designer/question/2/edit'>Edit</Link>
                                    <Link className="dropdown-item" to='/designer/question/2/delete'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Question #3</td>
                        <td>-</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                    <Link className="dropdown-item" to='/designer/question/3/view'>View</Link>
                                    <Link className="dropdown-item" to='/designer/question/3/edit'>Edit</Link>
                                    <Link className="dropdown-item" to='/designer/question/3/delete'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <Pagination/>
            </Content>
        </div>
    )
}

export default DesignerQuestions;