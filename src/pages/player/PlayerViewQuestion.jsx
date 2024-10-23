import Sidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import '../../scss/player/_player_view_question.scss'
import {Link} from "react-router-dom";

const PlayerViewQuestion = () => {
    return (
        <div className='wrapper'>
            <Sidebar/>

            <Content
                header='Question'
                subHeader='View'
                headerRoute='/player/questions'
                headerId='player-view-question-content-header'
                contentId='player-view-question-content'
            >
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
                    <li><Link to='/player/question/2/view'>Question #2</Link></li>
                    <li><Link to='/player/question/3/view'>Question #3</Link></li>
                    <li><Link to='/player/question/5/view'>Question #5</Link></li>
                    <li><Link to='/player/question/6/view'>Question #6</Link></li>
                    <li><Link to='/player/question/8/view'>Question #8</Link></li>
                </ul>
            </Content>
        </div>
    )
}

export default PlayerViewQuestion;