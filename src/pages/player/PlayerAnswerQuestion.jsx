import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import '../../scss/player/_player_answer_question.scss'

const PlayerAnswerQuestion = () => {
    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Questions'
                subHeader='Answer'
                headerRoute='/player/questions'
                contentHeaderId='player-answer-question-content-header'
                contentId='player-answer-question-content'
            >
                <p><span className="fw-bold">Category:</span> Sports</p>
                <p><span className="fw-bold">Difficulty:</span> Easy</p>
                <form className="form-control">
                    <p>Which country won the FIFA World Cup in 2022?</p>
                    <label className="d-block">
                        <input type="radio" name="answer" value="Brazil" required/> Brazil
                    </label>

                    <label className="d-block">
                        <input type="radio" name="answer" value="Germany"/> Germany
                    </label>

                    <label className="d-block">
                        <input type="radio" name="answer" value="France"/> France
                    </label>

                    <label className="d-block">
                        <input type="radio" name="answer" value="Argentina"/> Argentina
                    </label>

                    <button className="btn btn-primary mt-4 w-100" type="submit">Submit</button>
                </form>
            </Content>
        </div>
    )
}

export default PlayerAnswerQuestion;