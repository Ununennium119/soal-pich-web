import PropTypes from "prop-types";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Table} from "react-bootstrap";
import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import PaginationComponent from "../../components/PaginationComponent";
import {routes} from "../../routes";

const PlayerQuestions = () => {
    const categories = [
        "Sports",
        "Mathematics",
        "History",
        "General",
    ]
    const questions = [
        {
            id: 1,
            title: 'Question #1',
            category: 'Sports',
        },
        {
            id: 2,
            title: 'Question #2',
            category: 'Mathematics',
        },
        {
            id: 3,
            title: 'Question #3',
            category: null,
        },
    ]

    const navigate = useNavigate()

    const [activePage, setActivePage] = useState(1);
    const [totalPages] = useState(150);

    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Questions'
            >
                <div className='options w-100 d-flex justify-content-between mb-4'>
                    <div className="d-flex justify-content-start w-50">
                        <div className="d-flex align-items-center w-50 me-5">
                            <input
                                type="text"
                                className="form-control d-inline-block w-100"
                                id="title-input"
                                placeholder="Filter by title..."
                            />
                        </div>

                        <div className="d-flex w-50 justify-content-start align-items-center">
                            <label htmlFor='category-filter' className='d-inline-block me-3'>Category</label>
                            <select className="form-control d-inline-block w-50" id="category-filter">
                                <option key={null} value={null}>All</option>
                                {categories.map((category) => {
                                    return <option key={category} value={category}>{category}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className='d-flex w-25 justify-content-end'>
                        <div className="d-flex" id='buttons-wrapper'>
                            <button
                                onClick={() => navigate(routes.playerQuestionsAnswer(1))}
                                className="btn btn-primary me-3"
                            >
                                Answer Random
                            </button>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#category-modal">
                                Answer By Category
                            </button>
                        </div>
                    </div>
                </div>

                <Table hover={true} className="table table-bordered">
                    <thead>
                    <tr>
                        <th key='id'>ID</th>
                        <th key='title'>Title</th>
                        <th key='category'>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {questions.map((question) => {
                        return <QuestionRow
                            key={question.id}
                            question={{
                                id: question.id,
                                title: question.title,
                                category: question.category
                            }}
                        />
                    })}
                    </tbody>
                </Table>

                <PaginationComponent
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={(pageNumber) => {
                        setActivePage(pageNumber)
                    }}
                />
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

const QuestionRow = ({question}) => {
    const navigate = useNavigate()

    return (
        <tr>
            <td
                role='button'
                onClick={() => {
                    navigate(routes.playerQuestionsView(question.id))
                }}
                style={{width: '10%'}}
            >
                {question.id}
            </td>
            <td
                role='button'
                onClick={() => {
                    navigate(routes.playerQuestionsView(question.id))
                }}
                style={{width: '50%'}}
            >
                {question.title}
            </td>
            <td
                role='button'
                onClick={() => {
                    navigate(routes.playerQuestionsView(question.id))
                }}
                style={{width: '30%'}}
            >
                {question.category ? question.category : '-'}
            </td>
        </tr>
    )
}
QuestionRow.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string,
    }),
}

const CategoriesList = ({count}) => {
    const navigate = useNavigate()
    return (
        <div className="list-group overflow-y-scroll" id="categoryList" style={{maxHeight: '300px'}}>
            {[...Array(count)].map((_, index) => (
                <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                        navigate(routes.playerQuestionsAnswer(index));
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

export default PlayerQuestions;