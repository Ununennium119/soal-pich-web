import PropTypes from "prop-types";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Table} from "react-bootstrap";
import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import ConfirmationPopover from "../../../components/ConfirmationButton";
import PaginationComponent from "../../../components/PaginationComponent";
import {routes} from "../../../routes";

const DesignerQuestions = () => {
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

    const [activePage, setActivePage] = useState(1);
    const [totalPages] = useState(150);

    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header='Questions'
            >
                <div className="card w-100">
                    <div className='card-header w-100 d-flex justify-content-between p-3'>
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
                            <Link to={routes.designerQuestionsCreate} className="btn btn-primary w-auto ps-5 pe-5">
                                New
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">
                        <Table hover={true} className="table align-middle">
                            <thead className="rounded-5 bg-gray">
                            <tr>
                                <th key='id'>ID</th>
                                <th key='title'>Title</th>
                                <th key='category'>Category</th>
                                <th key='options'>Options</th>
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
                    </div>

                    <div className="card-footer d-flex justify-content-center p-3">
                        <PaginationComponent
                            activePage={activePage}
                            totalPages={totalPages}
                            onPageChange={(pageNumber) => {
                                setActivePage(pageNumber)
                            }}
                        />
                    </div>
                </div>
            </Content>
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
                    navigate(routes.designerQuestionsView(question.id))
                }}
                style={{width: '10%'}}
            >
                {question.id}
            </td>
            <td
                role='button'
                onClick={() => {
                    navigate(routes.designerQuestionsView(question.id))
                }}
                style={{width: '50%'}}
            >
                {question.title}
            </td>
            <td
                role='button'
                onClick={() => {
                    navigate(routes.designerQuestionsView(question.id))
                }}
                style={{width: '30%'}}
            >
                {question.category ? question.category : '-'}
            </td>
            <td
                className='d-flex justify-content-around'
                style={{width: '100%'}}
            >
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                        navigate(routes.designerQuestionsEdit(question.id))
                    }}
                >
                    &#9998;
                </button>
                <ConfirmationPopover
                    triggerButton={
                        <button className='btn btn-outline-danger'>
                            &#10006;
                        </button>
                    }
                    onConfirm={() => {
                        console.log(`Deleting question with id ${question.id}...`)
                    }}
                    placement="left"
                />
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

export default DesignerQuestions;