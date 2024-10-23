import Content from "../../components/Content";
import '../../scss/designer/_designer_questions.scss'
import Pagination from "../../components/Pagination";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import DesignerSidebar from "../../components/DesignerSidebar";
import ConfirmationPopover from "../../components/ConfirmationButton";

const QuestionRow = ({question}) => {
    const navigate = useNavigate()

    return (
        <tr>
            <td
                className='designer-question-id'
                onClick={() => {
                    navigate(`/designer/question/${question.id}/view`)
                }}
            >
                {question.id}
            </td>
            <td
                className='designer-question-title'
                onClick={() => {
                    navigate(`/designer/question/${question.id}/view`)
                }}
            >
                {question.title}
            </td>
            <td
                className='designer-question-category'
                onClick={() => {
                    navigate(`/designer/question/${question.id}/view`)
                }}
            >
                {question.category ? question.category : '-'}
            </td>
            <td className='designer-question-options d-flex justify-content-around'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                        navigate(`/designer/question/${question.id}/edit`)
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

const DesignerQuestions = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header='Questions'
                contentHeaderId='designer-questions-content-header'
                contentId='designer-questions-content'
            >
                <div className='options w-100 d-flex justify-content-between'>
                    <div className="filter w-75">
                        <div>
                            <input type="text" className="form-control" id="title-input"
                                   placeholder="Filter by title..."/>
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

                    <div className='d-flex w-25 justify-content-end'>
                        <Link to={'/designer/questions/create'} className="btn btn-primary w-50">
                            New
                        </Link>
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
                    <QuestionRow question={{
                        id: 1,
                        title: "Question #1",
                        category: "Sports"
                    }}/>
                    <QuestionRow question={{
                        id: 2,
                        title: "Question #2",
                        category: "Mathematics",
                    }}/>
                    <QuestionRow question={{
                        id: 3,
                        title: "Question #3",
                        category: undefined,
                    }}/>
                    </tbody>
                </table>

                <Pagination/>
            </Content>
        </div>
    )
}

export default DesignerQuestions;