import axiosInstance from "../../../config/axiosInstance";

export const Register = async (data) => {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data
}

export const Login = async (data) => {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data
}

export const GetMe = async () => {
    const response = await axiosInstance.get("/auth/get-me");
    return response.data
}