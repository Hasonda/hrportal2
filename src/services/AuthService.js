import $api from "../http";
import {AxiosResponse} from 'axios';
import type {Token} from "../models/response/Token";


export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<Token>> {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return $api.post('/auth/login', formData)
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<Token>> {
        return $api.post('/auth/signup', {email, password})
    }
}

