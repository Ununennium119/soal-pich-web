import PlayerSidebar from "../../components/PlayerSidebar.jsx";
import Content from "../../components/Content";
import '../../scss/player/_player_scoreboard.scss'
import Pagination from "../../components/Pagination";

const PlayerScoreboard = () => {
    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content
                header='Scoreboard'
                contentHeaderId='player-scoreboard-content-header'
                contentId='player-scoreboard-content'
            >
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Username #1</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Username #2</td>
                        <td>500</td>
                    </tr>
                    <tr className="current">
                        <td>3</td>
                        <td>Username #3</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Username #4</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Username #5</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Username #6</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Username #7</td>
                        <td>68</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Username #8</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Username #9</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Username #10</td>
                        <td>39</td>
                    </tr>
                    </tbody>
                </table>

                <Pagination/>
            </Content>
        </div>
    )
}

export default PlayerScoreboard;