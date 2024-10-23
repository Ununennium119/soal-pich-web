import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import "../../../scss/designer/category/_designer_create_category.scss"

const DesignerCreateCategory = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                subHeader="Create"
                headerRoute="/designer/categories"
                contentHeaderId="designer-create-category-content-header"
                contentId="designer-create-category-content"
            >
                <form className="form-control">
                    <div className="flex-row">
                        <div className="mb-4">
                            <label htmlFor="title-input" className="form-label">Title</label>
                            <input type="text" id="title-input" className="form-control" placeholder="Enter title..."/>
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

export default DesignerCreateCategory;