import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlayerDashboard from "./pages/player/PlayerDashboard";
import PlayerQuestions from "./pages/player/PlayerQuestions";
import PlayerScoreboard from "./pages/player/PlayerScoreboard";
import PlayerAnswerQuestion from "./pages/player/PlayerAnswerQuestion";
import PlayerViewQuestion from "./pages/player/PlayerViewQuestion";
import DesignerDashboard from "./pages/designer/DesignerDashboard";
import DesignerQuestions from "./pages/designer/DesignerQuestions";
import DesignerViewQuestion from "./pages/designer/DesignerViewQuestion";
import DesignerEditQuestion from "./pages/designer/DesignerEditQuestion";
import DesignerCreateQuestion from "./pages/designer/DesignerCreateQuestion";
import DesignerCategories from "./pages/designer/DesignerCategories";
import DesignerCreateCategory from "./pages/designer/DesignerCreateCategory";
import DesignerEditCategory from "./pages/designer/DesignerEditCategory";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/player/dashboard" element={<PlayerDashboard/>}/>
            <Route path="/player/questions" element={<PlayerQuestions/>}/>
            <Route path="/player/scoreboard" element={<PlayerScoreboard/>}/>
            <Route path="/player/question/:id/answer" element={<PlayerAnswerQuestion/>}/>
            <Route path="/player/question/:id/view" element={<PlayerViewQuestion/>}/>

            <Route path="/designer/dashboard" element={<DesignerDashboard/>}/>
            <Route path="/designer/questions" element={<DesignerQuestions/>}/>
            <Route path="/designer/questions/create" element={<DesignerCreateQuestion/>}/>
            <Route path="/designer/question/:id/view" element={<DesignerViewQuestion/>}/>
            <Route path="/designer/question/:id/edit" element={<DesignerEditQuestion/>}/>
            <Route path="/designer/categories" element={<DesignerCategories/>}/>
            <Route path="/designer/categories/create" element={<DesignerCreateCategory/>}/>
            <Route path="/designer/category/1/edit" element={<DesignerEditCategory/>}/>
        </Routes>
    );
}

export default App;
