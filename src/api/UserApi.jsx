import axiosInstance from "./Api";

export const followUser = async (username) => {
    const response = await axiosInstance.post(`/api/users/${username}/follow`);
    return response.data;
};
