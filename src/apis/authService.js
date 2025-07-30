import axiosClient from '@/apis/axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};

export { register };
