import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import {routes} from "../../../routes";

const DesignerEditCategory = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                subHeader="Sports"
                headerRoute={routes.designerCategories}
            >
                <div className='d-flex align-items-center w-75'>
                    <form className="form-control">
                        <div className="flex-row">
                            <div className="mb-4">
                                <label htmlFor="title-input" className="form-label">Title</label>
                                <input defaultValue="Sports" type="text" id="title-input" className="form-control"
                                       placeholder="Enter title..."/>
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

export default DesignerEditCategory;