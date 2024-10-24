import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import {routes} from "../../../routes";

const DesignerCreateQuestion = () => {
    return (
        <div className='wrapper'>
            <DesignerSidebar/>

            <Content
                header='Questions'
                subHeader='Create'
                headerRoute={routes.designerQuestions}
            >
                <div className='d-flex align-items-center w-75 mb-4'>
                    <form className="form-control">
                        <div className="flex-row">
                            <div className="mb-4">
                                <label htmlFor="title-input" className="form-label">Title</label>
                                <input type="text" id="title-input" className="form-control"
                                       placeholder="Enter title..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="question-input" className="form-label">Question</label>
                                <input type="text" id="question-input" className="form-control"
                                       placeholder="Enter Question..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-1" className="form-label">Option #1</label>
                                <input type="text" id="option-input-1" className="form-control"
                                       placeholder="Enter Option #1..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-2" className="form-label">Option #2</label>
                                <input type="text" id="option-input-2" className="form-control"
                                       placeholder="Enter Option #2..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-3" className="form-label">Option #3</label>
                                <input type="text" id="option-input-3" className="form-control"
                                       placeholder="Enter Option #3..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="option-input-4" className="form-label">Option #4</label>
                                <input type="text" id="option-input-4" className="form-control"
                                       placeholder="Enter Option #4..."/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="correct-answer-input" className="form-label">Correct Answer</label>
                                <select className="form-control" id="correct-answer-input">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="category-input" className="form-label">Category</label>
                                <select className="form-control" id="category-input">
                                    <option value="">-</option>
                                    <option value="sports">Sports</option>
                                    <option value="mathematics">Mathematics</option>
                                    <option value="general">General</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="difficulty-input" className="form-label">Difficulty</label>
                                <select defaultValue="normal" className="form-control" id="difficulty-input">
                                    <option value="easy">Easy</option>
                                    <option value="normal">Normal</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="related-questions-input" className="form-label">Related
                                    Questions</label>
                                <select defaultValue="" className="form-control" id="related-questions-input" multiple>
                                    <option value="">None</option>
                                    <option value="1">Question #1</option>
                                    <option value="2">Question #2</option>
                                    <option value="3">Question #3</option>
                                    <option value="4">Question #4</option>
                                    <option value="5">Question #5</option>
                                    <option value="6">Question #6</option>
                                    <option value="7">Question #7</option>
                                    <option value="8">Question #8</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <button type="submit" className="btn btn-primary w-100">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Content>
        </div>
    )
}

export default DesignerCreateQuestion