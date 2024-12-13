import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import {routes} from "../../../routes";
import {useToast} from "../../../context/ToastContext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {listCategories} from "../../../api/CategoriesApi";
import {getQuestion, listQuestions, updateQuestion} from "../../../api/QuestionsApi";

const DesignerEditQuestion = () => {
    const {addToast} = useToast();
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({
        id: 0,
        title: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: 1,
        category: null,
        difficulty: 'normal',
        relatedQuestions: [],
    });

    const fetchQuestion = async () => {
        try {
            const getQuestionResponse = await getQuestion(id);
            getQuestionResponse.category = getQuestionResponse.category?.id
            getQuestionResponse.relatedQuestions = getQuestionResponse.relatedQuestions.map((question) => {
                return question.id
            })
            setQuestion(getQuestionResponse)
            setLoading(false)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    const fetchCategories = async () => {
        try {
            const listCategoriesResponse = await listCategories({});
            setCategories(listCategoriesResponse)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    const fetchQuestions = async () => {
        try {
            const listQuestionsResponse = (await listQuestions()).filter(question => question.id != id);
            setQuestions(listQuestionsResponse)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    const handleUpdateQuestion = async (event) => {
        event.preventDefault();

        try {
            await updateQuestion(question.id, question);
            addToast("Question updated successfully!", 'success')
            navigate(routes.designerQuestions);
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    }

    useEffect(() => {
        fetchQuestion()
        fetchCategories()
        fetchQuestions()
    }, [id]);

    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader={question.title}
                headerRoute={routes.designerQuestions}
            >
                {loading ? <h5>Loading...</h5> : <div className='d-flex align-items-center w-75'>
                    <form className="form-control pb-3" onSubmit={handleUpdateQuestion}>
                        <div className="flex-row">
                            <div className="mb-4">
                                <label htmlFor="title-input" className="form-label">Title</label>
                                <input type="text"
                                       id="title-input"
                                       className="form-control"
                                       placeholder="Enter title..."
                                       value={question.title}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           title: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="question-input" className="form-label">Question</label>
                                <input type="text"
                                       id="question-input"
                                       className="form-control"
                                       placeholder="Enter Question..."
                                       value={question.question}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           question: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-1" className="form-label">Option #1</label>
                                <input type="text"
                                       id="option-input-1"
                                       className="form-control"
                                       placeholder="Enter Option #1..."
                                       value={question.option1}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           option1: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-2" className="form-label">Option #2</label>
                                <input type="text"
                                       id="option-input-2"
                                       className="form-control"
                                       placeholder="Enter Option #2..."
                                       value={question.option2}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           option2: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-3" className="form-label">Option #3</label>
                                <input type="text"
                                       id="option-input-3"
                                       className="form-control"
                                       placeholder="Enter Option #3..."
                                       value={question.option3}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           option3: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-4" className="form-label">Option #4</label>
                                <input type="text"
                                       id="option-input-4"
                                       className="form-control"
                                       placeholder="Enter Option #4..."
                                       value={question.option4}
                                       onChange={(e) => setQuestion({
                                           ...question,
                                           option4: e.target.value,
                                       })}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="correct-answer-input" className="form-label">Correct Answer</label>
                                <select
                                    className="form-control"
                                    id="correct-answer-input"
                                    value={question.answer}
                                    onChange={(e) => setQuestion({
                                        ...question,
                                        answer: parseInt(e.target.value),
                                    })}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="category-input" className="form-label">Category</label>
                                <select
                                    className="form-control"
                                    id="category-input"
                                    value={question.category}
                                    onChange={(e) => setQuestion({
                                        ...question,
                                        category: parseInt(e.target.value),
                                    })}
                                >
                                    <option key={null} value={null}>-</option>
                                    {categories.map((category) => {
                                        return <option key={category.id} value={category.id}>{category.title}</option>
                                    })}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="difficulty-input" className="form-label">Difficulty</label>
                                <select
                                    defaultValue="normal"
                                    className="form-control"
                                    id="difficulty-input"
                                    value={question.difficulty}
                                    onChange={(e) => setQuestion({
                                        ...question,
                                        difficulty: e.target.value,
                                    })}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="normal">Normal</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="related-questions-input" className="form-label">Related
                                    Questions</label>
                                <select defaultValue=""
                                        className="form-control"
                                        id="related-questions-input"
                                        multiple
                                        value={question.relatedQuestions}
                                        onChange={(e) => {
                                            const values = Array.from(e.target.selectedOptions, (option) => option.value);
                                            setQuestion({
                                                ...question,
                                                relatedQuestions: values.includes('') ? [] : values.map(Number)
                                            })
                                        }}
                                >
                                    <option value="">Deselect All</option>
                                    {questions.map((question) => {
                                        return <option key={question.id} value={question.id}>{question.title}</option>
                                    })}
                                </select>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary w-100">Save</button>
                            </div>
                        </div>
                    </form>
                </div>}
            </Content>
        </div>
    )
}

export default DesignerEditQuestion;