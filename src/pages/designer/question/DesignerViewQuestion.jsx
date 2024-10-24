import {Link} from "react-router-dom";
import Content from "../../../components/Content";
import DesignerSidebar from "../../../components/DesignerSidebar";
import {routes} from "../../../routes";

const DesignerViewQuestion = () => {
    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader='View'
                headerRoute={routes.designerQuestions}
            >
                <div className='d-flex align-items-start flex-column w-100 ps-5'>
                    <p>Which country won the FIFA World Cup in 2022?</p>
                    <ol>
                        <li>Brazil</li>
                        <li>Germany</li>
                        <li>France</li>
                        <li className="correct-answer">Argentina</li>
                    </ol>
                    <p><span className="fw-bold">Category:</span> Sports</p>
                    <p><span className="fw-bold">Difficulty:</span> Easy</p>
                    <span className="fw-bold">Related Questions:</span>
                    <ul>
                        <li><Link to={routes.designerQuestionsView(2)}>Question #2</Link></li>
                        <li><Link to={routes.designerQuestionsView(3)}>Question #3</Link></li>
                        <li><Link to={routes.designerQuestionsView(5)}>Question #5</Link></li>
                        <li><Link to={routes.designerQuestionsView(6)}>Question #6</Link></li>
                        <li><Link to={routes.designerQuestionsView(8)}>Question #8</Link></li>
                    </ul>
                </div>
            </Content>
        </div>
    )
}

export default DesignerViewQuestion;