import Sidebar from "../../components/PlayerSidebar.jsx";
import Content from "../../components/Content";

const PlayerDashboard = () => {
    return (
        <div className="wrapper">
            <Sidebar/>

            <Content header='Dashboard'>
                <h1 id="dashboard-welcome">Welcome Username!</h1>
            </Content>
        </div>
    )
}

export default PlayerDashboard;