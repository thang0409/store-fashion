import axiosClient from '@/apis/axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfo = async () => {
    return await axiosClient.get(
        'user/info/6967eaa5-e852-4a14-8817-9e643fcc5c6f'
    );
};

export { register, signIn, getInfo };
