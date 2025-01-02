import axiosInstance from "./Api";

export const login = async (body) => {
    const response = await axiosInstance.post('/api/auth/login', body);
    return response.data;
};

export const register = async (body) => {
    const response = await axiosInstance.post('/api/auth/register', body);
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await axiosInstance.get('/api/auth/current-user');
    return response.data;
};

export const logout = async () => {
    const response = await axiosInstance.get('/api/auth/logout');
    return response.data;
};
