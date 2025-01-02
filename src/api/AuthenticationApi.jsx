import axiosInstance from "./Api";

export const login = async (body) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (body) => {
    try {
        const response = await axiosInstance.post('/api/auth/register', body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await axiosInstance.get('/api/auth/current-user');
        return response.data;
    } catch (error) {
        throw error;
    }
};
