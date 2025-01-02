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
import {ThemeContext} from "./context/ThemeContext";
import {ToastContainer} from "react-toastify";
import React, {useContext} from "react";
import PlayerFeed from "./pages/player/PlayerFeed";

function App() {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <DarkModeToggle/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme === 'dark' ? 'dark' : 'light'}
            />

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path={routes.login} element={<Login/>}/>
                <Route path={routes.register} element={<Register/>}/>

                <Route path={routes.playerDashboard} element={<PlayerDashboard/>}/>
                <Route path={routes.playerQuestions} element={<PlayerQuestions/>}/>
                <Route path={routes.playerQuestionsView(':id')} element={<PlayerViewQuestion/>}/>
                <Route path={routes.playerQuestionsAnswer(':id')} element={<PlayerAnswerQuestion/>}/>
                <Route path={routes.playerFeed} element={<PlayerFeed/>}/>
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
        </>
    );
}

export default App;
