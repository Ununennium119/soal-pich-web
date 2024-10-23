import Sidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import '../../scss/player/_player_questions.scss'
import Pagination from "../../components/Pagination";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

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

const PlayerQuestions = () => {
    const navigate = useNavigate()
    return (
        <div className="wrapper">
            <Sidebar/>

            <Content
                header='Questions'
                headerId='player-questions-content-header'
                contentId='player-questions-content'
            >
                <div id ='options'>
                    <div className="d-flex" id='filters-wrapper'>
                        <input type="text" id="filterInput" className="form-control"
                               placeholder="Filter by title..."/>
                        <select className="form-control" id="categoryFilter">
                            <option value="">Filter by category:</option>
                            <option value="Admin">Sports</option>
                            <option value="User">Mathematics</option>
                            <option value="Editor">General</option>
                        </select>
                    </div>

                    <div className="d-flex" id='buttons-wrapper'>
                        <Link to={'/player/question/1/answer'} className="btn btn-primary">
                            Answer Random
                        </Link>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#category-modal">
                            Answer By Category
                        </button>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr onClick={() => {
                        navigate(`/player/question/1/view`);
                    }}>
                        <td>1</td>
                        <td>Question #1</td>
                        <td>Sports</td>
                    </tr>
                    <tr onClick={() => {
                        navigate(`/player/question/2/view`);
                    }}>
                        <td>2</td>
                        <td>Question #2</td>
                        <td>Mathematics</td>
                    </tr>
                    <tr onClick={() => {
                        navigate(`/player/question/3/view`);
                    }}>
                        <td>3</td>
                        <td>Question #3</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </table>

                <Pagination/>
            </Content>

            <div className="modal fade" id="category-modal" tabIndex="-1" aria-labelledby="category-modal-title"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" id="category-modal-header">
                            <h5 className="modal-title" id="category-modal-title">Select a Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" id="categorySearch" className="form-control mb-3"
                                   placeholder="Search categories..."/>

                            <CategoriesList count={10}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerQuestions;