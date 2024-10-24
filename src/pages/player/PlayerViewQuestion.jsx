import {Link} from "react-router-dom";
import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import {routes} from "../../routes";

const PlayerViewQuestion = () => {
    return (
        <div className='wrapper'>
            <PlayerSidebar/>

            <Content
                header='Questions'
                subHeader='World Cup 2024 Winner'
                headerRoute={routes.playerQuestions}
            >
                <div className='d-flex flex-column w-75 mt-4'>
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
                        <li><Link to={routes.playerQuestionsView(2)}>Question #2</Link></li>
                        <li><Link to={routes.playerQuestionsView(3)}>Question #3</Link></li>
                        <li><Link to={routes.playerQuestionsView(5)}>Question #5</Link></li>
                        <li><Link to={routes.playerQuestionsView(6)}>Question #6</Link></li>
                        <li><Link to={routes.playerQuestionsView(8)}>Question #8</Link></li>
                    </ul>
                </div>
            </Content>
        </div>
    )
}

export default PlayerViewQuestion;