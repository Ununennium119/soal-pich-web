import {Link} from "react-router-dom";
import Content from "../../../components/Content";
import DesignerSidebar from "../../../components/DesignerSidebar";

const DesignerViewQuestion = () => {
    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader='View'
                headerRoute='/designer/questions'
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
                        <li><Link to='/designer/question/2/view'>Question #2</Link></li>
                        <li><Link to='/designer/question/3/view'>Question #3</Link></li>
                        <li><Link to='/designer/question/5/view'>Question #5</Link></li>
                        <li><Link to='/designer/question/6/view'>Question #6</Link></li>
                        <li><Link to='/designer/question/8/view'>Question #8</Link></li>
                    </ul>
                </div>
            </Content>
        </div>
    )
}

export default DesignerViewQuestion;