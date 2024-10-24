import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";
import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import ConfirmationPopover from "../../../components/ConfirmationButton";
import PaginationComponent from "../../../components/PaginationComponent";
import {useState} from "react";
import {routes} from "../../../routes";

const DesignerCategories = () => {
    const categories = [
        {
            id: 1,
            title: "Sports",
        },
        {
            id: 2,
            title: "Mathematics",
        },
        {
            id: 3,
            title: "History",
        },
        {
            id: 4,
            title: "General",
        },
    ]

    const [activePage, setActivePage] = useState(1);
    const [totalPages] = useState(150);

    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
            >
                <div className='w-100 d-flex justify-content-between mb-4'>
                    <div className="d-flex align-items-start w-100">
                        <input
                            type="text"
                            className="form-control"
                            id="title-input"
                            placeholder="Filter by title..."
                            style={{width: '30%'}}
                        />
                    </div>

                    <div className='d-flex w-25 justify-content-end'>
                        <Link to={routes.designerCategoriesCreate} className="btn btn-primary w-auto ps-5 pe-5">
                            New
                        </Link>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th key='id'>ID</th>
                        <th key='title'>Title</th>
                        <th key='options'>Options</th>
                    </tr>
                    </thead>
                    <tbody id="dataTable">
                    {categories.map((category) => {
                        return <CategoryRow
                            key={category.id}
                            category={{
                                id: category.id,
                                title: category.title,
                            }}/>
                    })}
                    </tbody>
                </table>

                <PaginationComponent
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={(pageNumber) => {
                        setActivePage(pageNumber)
                    }}
                />
            </Content>
        </div>
    )
}

const CategoryRow = ({category}) => {
    const navigate = useNavigate()

    return (
        <tr>
            <td style={{width: '10%'}}>{category.id}</td>
            <td style={{width: '80%'}}>{category.title}</td>
            <td style={{width: '100%'}} className='d-flex justify-content-around'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                        navigate(routes.designerCategoriesEdit(category.id))
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

export default DesignerCategories;