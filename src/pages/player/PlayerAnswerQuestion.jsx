import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import {routes} from "../../routes";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {answerQuestion, getQuestion} from "../../api/QuestionsApi";
import {toast} from "react-toastify";

const PlayerAnswerQuestion = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [answer, setAnswer] = useState(1);
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
        difficulty: 'NORMAL',
        relatedQuestions: [],
    });

    const fetchQuestion = async () => {
        const getQuestionResponse = await getQuestion(id);
        setQuestion(getQuestionResponse)
        setLoading(false)
    }

    const handleAnswerChange = async (e) => {
        setAnswer(parseInt(e.target.value));
    }

    const handleAnswerQuestion = async (e) => {
        e.preventDefault();

        await answerQuestion(id, {"answer": answer});
        toast.success("Question answered successfully!")
        navigate(routes.playerQuestions);
    }

    useEffect(() => {
        fetchQuestion()
    }, [id]);

    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Questions'
                subHeader='Answer'
                headerRoute={routes.playerQuestions}
            >
                {loading ? <h5>Loading...</h5> : <div className='d-flex flex-column w-75'>
                    <p><span
                        className="fw-bold">Category:</span> {question.category?.title ? question.category?.title : '-'}
                    </p>
                    <p><span className="fw-bold">Difficulty:</span> {question.difficulty}</p>
                    <form className="form-control pb-3" onSubmit={handleAnswerQuestion}>
                        <p>{question.question}</p>
                        <label className="d-block">
                            <input type="radio"
                                   name="answer"
                                   value="1"
                                   onChange={handleAnswerChange}
                            />
                            {" " + question.option1}
                        </label>

                        <label className="d-block">
                            <input type="radio"
                                   name="answer"
                                   value="2"
                                   onChange={handleAnswerChange}
                            />
                            {" " + question.option2}
                        </label>

                        <label className="d-block">
                            <input type="radio"
                                   name="answer"
                                   value="3"
                                   onChange={handleAnswerChange}
                            />
                            {" " + question.option3}
                        </label>

                        <label className="d-block">
                            <input type="radio"
                                   name="answer"
                                   value="4"
                                   onChange={handleAnswerChange}
                            />
                            {" " + question.option4}
                        </label>

                        <button className="btn btn-primary mt-4 w-100" type="submit">Submit</button>
                    </form>
                </div>}
            </Content>
        </div>
    )
}

export default PlayerAnswerQuestion;