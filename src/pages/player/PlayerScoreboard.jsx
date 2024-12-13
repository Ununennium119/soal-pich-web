import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import PlayerSidebar from "../../components/PlayerSidebar.jsx";
import Content from "../../components/Content";
import PaginationComponent from "../../components/PaginationComponent";
import {Table} from "react-bootstrap";
import {getScoreboard} from "../../api/QuestionsApi";
import {useToast} from "../../context/ToastContext";
import {getCurrentUser} from "../../api/AuthenticationApi";

const PlayerScoreboard = () => {
    const {addToast} = useToast();

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({})
    const [users, setUsers] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchScoreboard = async () => {
        try {
            const getScoreboardResponse = await getScoreboard({
                page: activePage - 1,
            });
            setUsers(getScoreboardResponse.content)
            setActivePage(getScoreboardResponse.page + 1);
            setTotalPages(getScoreboardResponse.totalPages);
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        } finally {
            setLoading(false);
        }
    };

    const fetchCurrentUser = async () => {
        try {
            const currentUserResponse = await getCurrentUser();
            setCurrentUser(currentUserResponse)
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    useEffect(() => {
        fetchCurrentUser()
        fetchScoreboard()
    }, [activePage]);

    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Scoreboard'
            >
                {loading ? <h5>Loading...</h5> : <div className="card w-100">
                    <div className="card-body">
                        <Table className="table align-middle">
                            <thead>
                            <tr>
                                <th className='text-center' style={{width: '20%'}}>Rank</th>
                                <th className='text-center' style={{width: '55%'}}>Username</th>
                                <th className='text-center' style={{width: '25%'}}>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        UserRow({
                                            user: user,
                                            isCurrent: user.username === currentUser.username,
                                        }))
                                })
                            }
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

const UserRow = ({user, isCurrent}) => {
    return (
        <tr>
            <td className={`text-center ${isCurrent ? "bg-success-subtle" : ""}`}>{user.rank}</td>
            <td className={`text-center ${isCurrent ? "bg-success-subtle" : ""}`}>{user.username}</td>
            <td className={`text-center ${isCurrent ? "bg-success-subtle" : ""}`}>{user.score}</td>
        </tr>
    )
}
UserRow.propTypes = {
    user: PropTypes.shape({
        rank: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    }),
    isCurrent: PropTypes.bool.isRequired,
}

export default PlayerScoreboard;