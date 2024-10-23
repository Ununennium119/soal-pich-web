import Content from "../../components/Content";
import DesignerSidebar from "../../components/DesignerSidebar";

const DesignerDashboard = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content header='Dashboard'>
                <h1 id="dashboard-welcome">Welcome Username!</h1>
            </Content>
        </div>
    )
}

export default DesignerDashboard;