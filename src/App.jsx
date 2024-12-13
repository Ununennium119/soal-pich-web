import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlayerDashboard from "./pages/player/PlayerDashboard";
import PlayerQuestions from "./pages/player/PlayerQuestions";
import PlayerScoreboard from "./pages/player/PlayerScoreboard";
import PlayerAnswerQuestion from "./pages/player/PlayerAnswerQuestion";
import PlayerViewQuestion from "./pages/player/PlayerViewQuestion";
import DesignerDashboard from "./pages/designer/DesignerDashboard";
import DesignerQuestions from "./pages/designer/question/DesignerQuestions";
import DesignerViewQuestion from "./pages/designer/question/DesignerViewQuestion";
import DesignerEditQuestion from "./pages/designer/question/DesignerEditQuestion";
import DesignerCreateQuestion from "./pages/designer/question/DesignerCreateQuestion";
import DesignerCategories from "./pages/designer/category/DesignerCategories";
import DesignerCreateCategory from "./pages/designer/category/DesignerCreateCategory";
import DesignerEditCategory from "./pages/designer/category/DesignerEditCategory";
import {routes} from "./routes";
import DarkModeToggle from "./components/DarkModeToggle";
import {ThemeProvider} from "./context/ThemeContext";
import {ToastProvider} from "./context/ToastContext";

function App() {
    return (
        <ThemeProvider>
            <ToastProvider>
                <DarkModeToggle/>

                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path={routes.login} element={<Login/>}/>
                    <Route path={routes.register} element={<Register/>}/>

                    <Route path={routes.playerDashboard} element={<PlayerDashboard/>}/>
                    <Route path={routes.playerQuestions} element={<PlayerQuestions/>}/>
                    <Route path={routes.playerQuestionsView(':id')} element={<PlayerViewQuestion/>}/>
                    <Route path={routes.playerQuestionsAnswer(':id')} element={<PlayerAnswerQuestion/>}/>
                    <Route path={routes.playerScoreboard} element={<PlayerScoreboard/>}/>

                    <Route path={routes.designerDashboard} element={<DesignerDashboard/>}/>
                    <Route path={routes.designerQuestions} element={<DesignerQuestions/>}/>
                    <Route path={routes.designerQuestionsCreate} element={<DesignerCreateQuestion/>}/>
                    <Route path={routes.designerQuestionsView(':id')} element={<DesignerViewQuestion/>}/>
                    <Route path={routes.designerQuestionsEdit(':id')} element={<DesignerEditQuestion/>}/>
                    <Route path={routes.designerCategories} element={<DesignerCategories/>}/>
                    <Route path={routes.designerCategoriesCreate} element={<DesignerCreateCategory/>}/>
                    <Route path={routes.designerCategoriesEdit(':id')} element={<DesignerEditCategory/>}/>
                </Routes>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default App;
