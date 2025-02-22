import {Link, useParams} from "react-router-dom";
import Content from "../../../components/Content";
import DesignerSidebar from "../../../components/DesignerSidebar";
import {routes} from "../../../routes";
import {getQuestion} from "../../../api/QuestionsApi";
import {useEffect, useState} from "react";

const DesignerViewQuestion = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
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
    };

    useEffect(() => {
        fetchQuestion()
    }, [id]);

    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader='View'
                headerRoute={routes.designerQuestions}
            >
                {loading ? <h5>Loading...</h5> : <div className='d-flex align-items-start flex-column w-100 ps-5'>
                    <p>{question.title}</p>
                    <ol>
                        <li key={1} className={question.answer === 1 ? "correct-answer" : ""}>{question.option1}</li>
                        <li key={2} className={question.answer === 2 ? "correct-answer" : ""}>{question.option2}</li>
                        <li key={3} className={question.answer === 3 ? "correct-answer" : ""}>{question.option3}</li>
                        <li key={4} className={question.answer === 4 ? "correct-answer" : ""}>{question.option4}</li>
                    </ol>
                    <p><span className="fw-bold">Category:</span> {question.category?.title || "-"}</p>
                    <p><span className="fw-bold">Difficulty:</span> {question.difficulty}</p>
                    <span className="fw-bold">Related Questions:</span>
                    <ul>
                        {question.relatedQuestions.map((question) => {
                            return <li><Link to={routes.designerQuestionsView(question.id)}>{question.title}</Link></li>
                        })}
                    </ul>
                </div>}
            </Content>
        </div>
    )
}

export default DesignerViewQuestion;