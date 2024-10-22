import Sidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import '../../scss/player/_player_questions.scss'
import Pagination from "../../components/Pagination";

const PlayerQuestions = () => {
    return (
        <div className="wrapper">
            <Sidebar/>

            <Content header='Questions'>
                <div className="filter">
                    <div className="d-flex w-75">
                        <input type="text" id="filterInput" className="form-control"
                               placeholder="Filter by title..."/>
                        <select className="form-control" id="categoryFilter">
                            <option value="">Filter by category:</option>
                            <option value="Admin">Sports</option>
                            <option value="User">Mathematics</option>
                            <option value="Editor">General</option>
                        </select>
                    </div>

                    <div className="d-flex w-25">
                        <button className="btn btn-primary" onClick="window.location='answer-question.html'">
                            Answer Random
                        </button>
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
                    <tr onClick="window.location='view-question-player.html';">
                        <td>1</td>
                        <td>Question #1</td>
                        <td>Sports</td>
                    </tr>
                    <tr onClick="window.location='view-question-player.html';">
                        <td>2</td>
                        <td>Question #2</td>
                        <td>Mathematics</td>
                    </tr>
                    <tr onClick="window.location='view-question-player.html';">
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

                            <div className="list-group scrollable-list" id="categoryList">
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    1</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    2</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    3</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    4</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    5</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    6</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    7</a>
                                <a href="answer-question.html" className="list-group-item list-group-item-action">Category
                                    8</a>
                            </div>
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