import type { AxiosRequestConfig } from 'axios';
import { http } from '@/api/axios';

export type TokenData = {
    token: string;
};

export type TokenPayload = {
    username: string;
    password: string;
};

export type TokenErrorData = {
    non_field_errors?: string[];
};

export const tokenCreate = async (data: TokenPayload, config?: AxiosRequestConfig) => {
    const response = await http.post<TokenData>('/api/token/', data, {
        ...config,
    });

    return response.data;
};
