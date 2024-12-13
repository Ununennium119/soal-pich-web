import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import {routes} from "../../../routes";
import {useToast} from "../../../context/ToastContext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {editCategory, getCategory} from "../../../api/CategoriesApi";

const DesignerEditCategory = () => {
    const {addToast} = useToast();
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState({
        title: "",
    });

    const fetchCategory = async () => {
        try {
            const getQuestionResponse = await getCategory(id);
            setCategory(getQuestionResponse)
            setLoading(false)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    const handleEditCategory = async (event) => {
        event.preventDefault();

        try {
            await editCategory(id, category);
            addToast("Category edited successfully!", 'success')
            navigate(routes.designerCategories);
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [id]);

    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                subHeader="Create"
                headerRoute={routes.designerCategories}
            >
                {loading ? <h5>Loading...</h5> : <div className='d-flex align-items-center w-75'>
                    <form className="form-control pb-3" onSubmit={handleEditCategory}>
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
                </div>}
            </Content>
        </div>
    )
}

export default DesignerEditCategory;