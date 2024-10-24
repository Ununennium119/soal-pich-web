import {Link} from "react-router-dom";
import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";

const PlayerViewQuestion = () => {
    return (
        <div className='wrapper'>
            <PlayerSidebar/>

            <Content
                header='Questions'
                subHeader='World Cup 2024 Winner'
                headerRoute='/player/questions'
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
                        <li><Link to='/player/question/2/view'>Question #2</Link></li>
                        <li><Link to='/player/question/3/view'>Question #3</Link></li>
                        <li><Link to='/player/question/5/view'>Question #5</Link></li>
                        <li><Link to='/player/question/6/view'>Question #6</Link></li>
                        <li><Link to='/player/question/8/view'>Question #8</Link></li>
                    </ul>
                </div>
            </Content>
        </div>
    )
}

export default PlayerViewQuestion;