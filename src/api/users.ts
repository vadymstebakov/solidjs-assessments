import type { AxiosRequestConfig } from 'axios';
import { httpPrivate } from './axios';

export type UserPermission = {
    inherit: boolean;
    org_name: string;
    org_unit: string;
    org_unit_code: string;
    role: number;
    role_display: string;
    uuid: string;
};

export type UserRetrieveItem = {
    api_key: string | null;
    date_joined: string;
    email: string;
    first_name: string;
    id: string;
    is_active: boolean;
    is_service_account: boolean;
    is_superuser: boolean;
    last_login: string | null;
    last_name: string;
    token: {
        token: string;
    } | null;
    use_newui: boolean;
    user_perms: UserPermission[];
    username: string;
};

export type UserMeRetrieve = UserRetrieveItem;

export type UserMeRetrieveDataError = {
    detail?: string;
};

export const userMeRetrieve = async (config?: AxiosRequestConfig) => {
    const response = await httpPrivate.get<UserMeRetrieve>('/api/users/me', config);

    return response.data;
};
