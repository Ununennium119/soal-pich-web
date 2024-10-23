import DesignerSidebar from "../../components/DesignerSidebar";
import Content from "../../components/Content";
import Pagination from "../../components/Pagination";
import "../../scss/designer/_designer_categories.scss"
import {Link, useNavigate} from "react-router-dom";
import ConfirmationPopover from "../../components/ConfirmationButton";
import PropTypes from "prop-types";

const CategoryRow = ({category}) => {
    const navigate = useNavigate()

    return (
        <tr>
            <td
                className='designer-category-id'
                onClick={() => {
                    navigate(`/designer/category/${category.id}/view`)
                }}
            >
                {category.id}
            </td>
            <td
                className='designer-category-title'
                onClick={() => {
                    navigate(`/designer/category/${category.id}/view`)
                }}
            >
                {category.title}
            </td>
            <td className='designer-category-options d-flex justify-content-around'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                        navigate(`/designer/category/${category.id}/edit`)
                    }}
                >
                    &#9998;
                </button>
                <ConfirmationPopover
                    triggerButton={
                        <button className='btn btn-outline-danger'>
                            &#10006;
                        </button>
                    }
                    onConfirm={() => {
                        console.log(`Deleting category with id ${category.id}...`)
                    }}
                    placement="left"
                />
            </td>
        </tr>
    )
}
CategoryRow.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }),
}

const DesignerCategories = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
                contentHeaderId="designer-categories-content-header"
                contentId='designer-categories-content'
            >
                <div className='options w-100 d-flex justify-content-between'>
                    <div className="filter w-75">
                        <input type="text" className="form-control" id="title-input"
                               placeholder="Filter by title..."/>
                    </div>

                    <div className='d-flex w-25 justify-content-end'>
                        <Link to={'/designer/categories/create'} className="btn btn-primary w-50">
                            New
                        </Link>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody id="dataTable">
                    <CategoryRow category={{
                        id: 1,
                        title: "Sports",
                    }}/>
                    <CategoryRow category={{
                        id: 2,
                        title: "Mathematics",
                    }}/>
                    <CategoryRow category={{
                        id: 3,
                        title: "General",
                    }}/>
                    </tbody>
                </table>

                <Pagination/>
            </Content>
        </div>
    )
}

export default DesignerCategories;