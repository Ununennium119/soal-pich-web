import PropTypes from "prop-types";
import {useState} from "react";
import PlayerSidebar from "../../components/PlayerSidebar.jsx";
import Content from "../../components/Content";
import PaginationComponent from "../../components/PaginationComponent";
import {Table} from "react-bootstrap";

const PlayerScoreboard = () => {
    const users = [
        {
            rank: 1,
            username: 'User #1',
            score: 1000,
        },
        {
            rank: 2,
            username: 'User #2',
            score: 500,
        },
        {
            rank: 3,
            username: 'User #3',
            score: 200,
        },
        {
            rank: 4,
            username: 'User #4',
            score: 100,
        },
        {
            rank: 5,
            username: 'User #5',
            score: 80,
        },
        {
            rank: 6,
            username: 'User #6',
            score: 75,
        },
        {
            rank: 7,
            username: 'User #7',
            score: 68,
        },
        {
            rank: 8,
            username: 'User #8',
            score: 50,
        },
        {
            rank: 9,
            username: 'User #9',
            score: 40,
        },
        {
            rank: 10,
            username: 'User #10',
            score: 39,
        },
    ]
    const currentUser = 'User #3'

    const [activePage, setActivePage] = useState(1);
    const [totalPages] = useState(150);

    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Scoreboard'
            >
                <div className="card w-100">
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
                                            isCurrent: user.username === currentUser,
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
                </div>
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