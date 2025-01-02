import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import {routes} from "../../../routes";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {createCategory} from "../../../api/CategoriesApi";
import {toast} from "react-toastify";

const DesignerCreateCategory = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        title: "",
    });

    const handleCreateCategory = async (event) => {
        event.preventDefault();

        await createCategory(category);
        toast.success("Category created successfully!")
        navigate(routes.designerCategories);
    }

    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                subHeader="Create"
                headerRoute={routes.designerCategories}
            >
                <div className='d-flex align-items-center w-75'>
                    <form className="form-control pb-3" onSubmit={handleCreateCategory}>
                        <div className="flex-row">
                            <div className="mb-4">
                                <label htmlFor="title-input" className="form-label">Title</label>
                                <input type="text"
                                       id="title-input"
                                       className="form-control"
                                       placeholder="Enter title..."
                                       value={category.title}
                                       onChange={(e) => setCategory({
                                           ...category,
                                           title: e.target.value,
                                       })}
                                />
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary w-100">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Content>
        </div>
    )
}

export default DesignerCreateCategory;