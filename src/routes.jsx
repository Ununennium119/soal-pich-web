const prefixes = {
    designerPrefix: '/designer',
    playerPrefix: '/player',
    questionsPrefix: '/questions',
    categoriesPrefix: '/categories',
}

export const routes = {
    login: '/login',
    register: '/register',

    // Designer
    designerDashboard: `${prefixes.designerPrefix}/dashboard`,
    // Designer Questions
    designerQuestions: `${prefixes.designerPrefix}${prefixes.questionsPrefix}`,
    designerQuestionsCreate: `${prefixes.designerPrefix}${prefixes.questionsPrefix}/new`,
    designerQuestionsView: (id) => `${prefixes.designerPrefix}${prefixes.questionsPrefix}/${id}`,
    designerQuestionsEdit: (id) => `${prefixes.designerPrefix}${prefixes.questionsPrefix}/${id}/edit`,
    // Designer Categories
    designerCategories: `${prefixes.designerPrefix}${prefixes.categoriesPrefix}`,
    designerCategoriesCreate: `${prefixes.designerPrefix}${prefixes.categoriesPrefix}/new`,
    designerCategoriesEdit: (id) => `${prefixes.designerPrefix}${prefixes.categoriesPrefix}/${id}/edit`,

    // Player
    playerDashboard: `${prefixes.playerPrefix}/dashboard`,
    // Player Questions
    playerQuestions: `${prefixes.playerPrefix}${prefixes.questionsPrefix}`,
    playerQuestionsView: (id) => `${prefixes.playerPrefix}${prefixes.questionsPrefix}/${id}`,
    playerQuestionsAnswer: (id) => `${prefixes.playerPrefix}${prefixes.questionsPrefix}/${id}/answer`,
    // Player Feed
    playerFeed: `${prefixes.playerPrefix}/feed`,
    // Player Scoreboard
    playerScoreboard: `${prefixes.playerPrefix}/scoreboard`,
};