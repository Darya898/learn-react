import React, {Suspense, useContext, useEffect, useState} from 'react';
import {Route,Routes, Link} from 'react-router-dom';
import './styles/index.scss';


import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";

import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";
import {classNames} from "../shared/lib/classNames/classNames";



const App = () => {
    const{theme}=useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <Suspense fallback="">
                <Navbar/>


                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    );
};

export default App;