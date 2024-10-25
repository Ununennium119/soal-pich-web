import PlayerSidebar from "../../components/PlayerSidebar.jsx";
import Content from "../../components/Content";
import InfoCard from "../../components/InfoCard";

const PlayerDashboard = () => {
    return (
        <div className="wrapper">
            <PlayerSidebar/>

            <Content header='Dashboard'>
                <h2 className="mb-5">Welcome [Username]!</h2>
                <div className="d-flex">
                    <InfoCard title="Answered Questions" value={628} color="var(--bs-primary)"/>
                    <InfoCard title="Correct Answers" value={512} color="var(--bs-success)"/>
                    <InfoCard title="Rank" value={11} color="var(--bs-warning)"/>
                </div>
            </Content>
        </div>
    )
}

export default PlayerDashboard;