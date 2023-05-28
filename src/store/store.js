import {makeAutoObservable} from "mobx";
import type {IUser} from "../models/IUser";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;


    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }


    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
        } catch (e) {
            console.log(e);
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }


}