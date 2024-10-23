import DesignerSidebar from "../../components/DesignerSidebar";
import Content from "../../components/Content";
import '../../scss/designer/_designer_edit_question.scss'

const DesignerEditQuestion = () => {
    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader='World Cup 2022 Winner'
                headerRoute='/designer/questions'
                contentHeaderId='designer-edit-question-content-header'
                contentId='designer-edit-question-content'>
                <form className="form-control">
                    <div className="flex-row">
                        <div className="mb-4">
                            <label htmlFor="title-input" className="form-label">Title</label>
                            <input defaultValue="My question" type="text" id="title-input" className="form-control"
                                   placeholder="Enter title..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="question-input" className="form-label">Question</label>
                            <input defaultValue="What...?" type="text" id="question-input" className="form-control"
                                   placeholder="Enter Question..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="option-input-1" className="form-label">Option #1</label>
                            <input defaultValue="A" type="text" id="option-input-1" className="form-control"
                                   placeholder="Enter Option #1..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="option-input-2" className="form-label">Option #2</label>
                            <input defaultValue="B" type="text" id="option-input-2" className="form-control"
                                   placeholder="Enter Option #2..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="option-input-3" className="form-label">Option #3</label>
                            <input defaultValue="C" type="text" id="option-input-3" className="form-control"
                                   placeholder="Enter Option #3..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="option-input-4" className="form-label">Option #4</label>
                            <input defaultValue="D" type="text" id="option-input-4" className="form-control"
                                   placeholder="Enter Option #4..."/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="correct-answer-input" className="form-label">Correct Answer</label>
                            <select defaultValue="2" className="form-control" id="correct-answer-input">
                                <option defaultValue="1">1</option>
                                <option defaultValue="2">2</option>
                                <option defaultValue="3">3</option>
                                <option defaultValue="4">4</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category-input" className="form-label">Category</label>
                            <select defaultValue="sports" className="form-control" id="category-input">
                                <option defaultValue="">-</option>
                                <option defaultValue="sports">Sports</option>
                                <option defaultValue="mathematics">Mathematics</option>
                                <option defaultValue="general">General</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="difficulty-input" className="form-label">Difficulty</label>
                            <select defaultValue="easy" className="form-control" id="difficulty-input">
                                <option defaultValue="easy">Easy</option>
                                <option defaultValue="normal">Normal</option>
                                <option defaultValue="hard">Hard</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="related-questions-input" className="form-label">Related Questions</label>
                            <select defaultValue={["3", "4"]} className="form-control" id="related-questions-input" multiple>
                                <option defaultValue="">None</option>
                                <option defaultValue="1">Question #1</option>
                                <option defaultValue="2">Question #2</option>
                                <option defaultValue="3">Question #3</option>
                                <option defaultValue="4">Question #4</option>
                                <option defaultValue="5">Question #5</option>
                                <option defaultValue="6">Question #6</option>
                                <option defaultValue="7">Question #7</option>
                                <option defaultValue="8">Question #8</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <button type="submit" className="btn btn-primary w-100">Save</button>
                        </div>
                    </div>
                </form>
            </Content>
        </div>
    )
}

export default DesignerEditQuestion;