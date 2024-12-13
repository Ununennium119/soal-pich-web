import axiosInstance from "./Api";

export const listCategories = async (queries) => {
    const response = await axiosInstance.get('/categories', {
        params: queries
    });
    return response.data;
}

export const createCategory = async (body) => {
    const response = await axiosInstance.post('/categories', body);
    return response.data;
}

export const getCategory = async (id) => {
    const response = await axiosInstance.get(`/categories/${id}`);
    return response.data;
};

export const editCategory = async (id, body) => {
    const response = await axiosInstance.put(`/categories/${id}`, body);
    return response.data;
}

export const deleteCategory = async (id) => {
    const response = await axiosInstance.delete(`/categories/${id}`);
    return response.data;
};
