import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import "../../../scss/designer/category/_designer_edit_category.scss"

const DesignerEditCategory = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                subHeader="Sports"
                headerRoute="/designer/categories"
                contentHeaderId="designer-edit-category-content-header"
                contentId="designer-edit-category-content"
            >
                <form className="form-control">
                    <div className="flex-row">
                        <div className="mb-4">
                            <label htmlFor="title-input" className="form-label">Title</label>
                            <input defaultValue="Sports" type="text" id="title-input" className="form-control" placeholder="Enter title..."/>
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

export default DesignerEditCategory;