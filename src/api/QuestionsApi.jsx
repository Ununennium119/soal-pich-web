import axiosInstance from "./Api";

export const createQuestion = async (body) => {
    const response = await axiosInstance.post(`/api/questions`, body);
    return response.data;
};

export const updateQuestion = async (id, body) => {
    const response = await axiosInstance.put(`/api/questions/${id}`, body);
    return response.data;
};

export const getQuestion = async (id) => {
    const response = await axiosInstance.get(`/api/questions/${id}`);
    return response.data;
};

export const getRandomQuestion = async (queries) => {
    const response = await axiosInstance.get(`/api/questions/random`, {
        params: queries
    });
    return response.data;
};

export const listQuestions = async (queries) => {
    const response = await axiosInstance.get('/api/questions', {
        params: queries
    });
    return response.data;
};

export const deleteQuestion = async (id) => {
    const response = await axiosInstance.delete(`/api/questions/${id}`);
    return response.data;
};

export const answerQuestion = async (id, body) => {
    const response = await axiosInstance.post(`/api/questions/${id}/answer`, body);
    return response.data;
};

export const getScoreboard = async (queries) => {
    const response = await axiosInstance.get(`/api/scoreboard`, {
        params: queries
    });
    return response.data;
}
