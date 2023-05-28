import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import React, {useContext} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Footer from "./components/UI/Footer";

import './styles/App.css';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import VacancySubmit from "./pages/VacancySubmit";


function App() {
    const context = useContext(Context)
    return (<BrowserRouter>
        <Navbar isAuth={context.store.isAuth}/>
        <div className={'page'} id={'main-page'}>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>} to={'/profile'}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/resume'} element={<Resume/>}/>
                <Route path={'/vacancysubmit'} element={<VacancySubmit/>}/>
                {/*<Route path={'/resumedashboard'} element = {<ResumeDashboard/>}/>*/}
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>);
}

export default observer(App);
