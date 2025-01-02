import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Table} from "react-bootstrap";
import PlayerSidebar from "../../components/PlayerSidebar";
import Content from "../../components/Content";
import PaginationComponent from "../../components/PaginationComponent";
import {routes} from "../../routes";
import {getRandomQuestion, listQuestions} from "../../api/QuestionsApi";
import {listCategories} from "../../api/CategoriesApi";
import {toast} from "react-toastify";
import ConfirmationPopover from "../../components/ConfirmationButton";
import {MdPersonAdd} from "react-icons/md";
import {followUser} from "../../api/UserApi";

const PlayerQuestions = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [questions, setQuestions] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [titleFilter, setTitleFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState(null);

    const fetchQuestions = async () => {
        const listQuestionsResponse = await listQuestions({
            page: activePage - 1,
            title: titleFilter,
            category: categoryFilter,
            order: 'id',
            direction: 'DESC',
        });
        setQuestions(listQuestionsResponse.content)
        setActivePage(listQuestionsResponse.page.number + 1);
        setTotalPages(listQuestionsResponse.page.totalPages);
        setLoading(false);
    };

    const fetchCategories = async () => {
        try {
            const listCategoriesResponse = await listCategories({});
            setCategories(listCategoriesResponse)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    const handleAnswerRandom = async (category) => {
        const getRandomQuestionResponse = await getRandomQuestion({'category': category})
        if (getRandomQuestionResponse.id) {
            navigate(routes.playerQuestionsAnswer(getRandomQuestionResponse.id))
        } else {
            toast.warning("There is no question to answer!")
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [activePage, titleFilter, categoryFilter]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const QuestionRow = ({question}) => {

        const handleFollow = async (username) => {
            await followUser(username)
            toast.success("Designer followed successfully!")
        }

        return (
            <tr>
                <td
                    role='button'
                    onClick={() => {
                        navigate(routes.playerQuestionsView(question.id))
                    }}
                    style={{width: '10%', height: "55px"}}
                >
                    {question.id}
                </td>
                <td
                    role='button'
                    onClick={() => {
                        navigate(routes.playerQuestionsView(question.id))
                    }}
                    style={{width: '30%'}}
                >
                    {question.title}
                </td>
                <td
                    role='button'
                    onClick={() => {
                        navigate(routes.playerQuestionsView(question.id))
                    }}
                    style={{width: '30%'}}
                >
                    {question.category?.title ? question.category.title : '-'}
                </td>
                <td
                    role='button'
                    onClick={() => {
                        navigate(routes.playerQuestionsView(question.id))
                    }}
                    style={{width: '20%'}}
                >
                    {question.createdBy ? question.createdBy : '-'}
                </td>
                <td
                    className='d-flex justify-content-around'
                    style={{width: '100%'}}
                >
                    <ConfirmationPopover
                        triggerButton={
                            <button className='btn btn-outline-info'>
                                <MdPersonAdd/>
                            </button>
                        }
                        onConfirm={() => {
                            handleFollow(question.createdBy)
                        }}
                        placement="left"
                        text={`Follow ${question.createdBy}?`}
                    />
                </td>
            </tr>
        )
    }
    QuestionRow.propTypes = {
        question: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
            }),
            createdBy: PropTypes.string,
        }),
    }

    const CategoriesList = ({categories}) => {
        return (
            <div className="list-group overflow-y-scroll" id="categoryList" style={{maxHeight: '300px'}}>
                {categories.map(category => (
                    <button
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                            handleAnswerRandom(category.id)
                        }}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
        );
    };
    CategoriesList.propTypes = {
        categories: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    }

    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Questions'
            >
                {loading ? <h5>Loading...</h5> : <div className="card w-100">
                    <div className='card-header w-100 d-flex justify-content-between p-3'>
                        <div className="d-flex justify-content-start w-50">
                            <div className="d-flex align-items-center w-50 me-5">
                                <input
                                    type="text"
                                    className="form-control d-inline-block w-100"
                                    id="title-input"
                                    placeholder="Filter by title..."
                                    value={titleFilter}
                                    onChange={(e) => setTitleFilter(e.target.value)}
                                />
                            </div>

                            <div className="d-flex w-50 justify-content-start align-items-center">
                                <label htmlFor='category-filter' className='d-inline-block me-3'>Category</label>
                                <select className="form-control d-inline-block w-50"
                                        id="category-filter"
                                        value={categoryFilter}
                                        onChange={(e) =>
                                            setCategoryFilter(e.target.value === "null" ? null : e.target.value)
                                        }
                                >
                                    <option key={"null"} value={"null"}>All</option>
                                    {categories.map((category) => {
                                        return <option key={category.id} value={category.id}>{category.title}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className='d-flex w-25 justify-content-end'>
                            <div className="d-flex" id='buttons-wrapper'>
                                <button
                                    onClick={() => {
                                        handleAnswerRandom(null)
                                    }}
                                    className="btn btn-primary me-3"
                                >
                                    Answer Random
                                </button>
                                <button className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#category-modal">
                                    Answer By Category
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <Table hover={true} className="table align-middle">
                            <thead>
                            <tr>
                                <th key='id'>ID</th>
                                <th key='title'>Title</th>
                                <th key='category'>Category</th>
                                <th key='designer'>Designer</th>
                                <th key='follow' className={'text-center'}>Follow</th>
                            </tr>
                            </thead>
                            <tbody>
                            {questions.map((question) => {
                                return <QuestionRow
                                    key={question.id}
                                    question={{
                                        id: question.id,
                                        title: question.title,
                                        category: question.category,
                                        createdBy: question.createdBy,
                                    }}
                                />
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

            <div className="modal fade" id="category-modal" tabIndex="-1" aria-labelledby="category-modal-title"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" id="category-modal-header">
                            <h5 className="modal-title" id="category-modal-title">Select a Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" id="categorySearch" className="form-control mb-3"
                                   placeholder="Search categories..."/>

                            <CategoriesList categories={categories}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerQuestions;