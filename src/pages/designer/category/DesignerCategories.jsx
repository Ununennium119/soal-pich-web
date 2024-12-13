import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";
import DesignerSidebar from "../../../components/DesignerSidebar";
import Content from "../../../components/Content";
import ConfirmationPopover from "../../../components/ConfirmationButton";
import PaginationComponent from "../../../components/PaginationComponent";
import {useEffect, useState} from "react";
import {routes} from "../../../routes";
import {Table} from "react-bootstrap";
import {deleteCategory, listCategories} from "../../../api/CategoriesApi";
import {useToast} from "../../../context/ToastContext";
import {deleteQuestion} from "../../../api/QuestionsApi";

const DesignerCategories = () => {
    const {addToast} = useToast();

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [titleFilter, setTitleFilter] = useState("");

    const fetchCategories = async () => {
        try {
            const listCategoriesResponse = await listCategories({
                page: activePage - 1,
                pageSize: 10,
                title: titleFilter,
                order: 'id',
                direction: 'DESC',
            });
            setCategories(listCategoriesResponse.content)
            setActivePage(listCategoriesResponse.page + 1);
            setTotalPages(listCategoriesResponse.totalPages);
            setLoading(false)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    useEffect(() => {
        fetchCategories()
    }, [titleFilter, activePage]);

    const CategoryRow = ({category}) => {
        const navigate = useNavigate()

        const handleDelete = async (id) => {
            try {
                await deleteCategory(id)
                await fetchCategories()
            } catch (err) {
                console.log(err)
                addToast(err.response.data.message, 'error')
            }
        }

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
                            handleDelete(category.id)
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

    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content
                header="Categories"
            >
                {loading ? <h5>Loading...</h5> : <div className="card w-100">
                    <div className='card-header w-100 d-flex justify-content-between p-3'>
                        <div className="d-flex align-items-start w-100">
                            <input
                                type="text"
                                className="form-control"
                                id="title-input"
                                placeholder="Filter by title..."
                                style={{width: '30%'}}
                                value={titleFilter}
                                onChange={(e) => setTitleFilter(e.target.value)}
                            />
                        </div>

                        <div className='d-flex w-25 justify-content-end'>
                            <Link to={routes.designerCategoriesCreate} className="btn btn-primary w-auto ps-5 pe-5">
                                New
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">
                        <Table className="table align-middle">
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
                        </Table>
                    </div>

                    <div className="card-footer d-flex justify-content-center p-3">
                        <PaginationComponent
                            activePage={activePage}
                            totalPages={totalPages}
                            onPageChange={(pageNumber) => {
                                setActivePage(pageNumber)
                            }}
                        />
                    </div>
                </div>}
            </Content>
        </div>
    )
}

export default DesignerCategories;