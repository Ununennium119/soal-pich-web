import DesignerSidebar from "../../components/DesignerSidebar";
import Content from "../../components/Content";
import InfoCard from "../../components/InfoCard";

const DesignerDashboard = () => {
    return (
        <div className="wrapper">
            <DesignerSidebar/>

            <Content header='Dashboard'>
                <h2 className="mb-5">Welcome [Username]!</h2>
                <div className="d-flex">
                    <InfoCard title="All Questions" value={628} color="var(--bs-primary)"/>
                    <InfoCard title="Your Questions" value={152} color="var(--bs-success)"/>
                    <InfoCard title="Categories" value={34} color="var(--bs-warning)"/>
                </div>
            </Content>
        </div>
    )
}

export default DesignerDashboard;