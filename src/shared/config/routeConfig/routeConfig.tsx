import React from "react";
import { RouteProps } from "react-router-dom"
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes{
    MAIN='main',
    ABOUT='about',
    ERROR='error',
}
export const RouterPath:Record<AppRoutes, string>={
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.ERROR]:'*'
}
export const routeConfig:Record<AppRoutes, RouteProps>={
    [AppRoutes.MAIN]:{
        path:RouterPath.main,
        element:<MainPage/>
    },
    [AppRoutes.ABOUT]:{
        path:RouterPath.about,
        element:<AboutPage/>
    },
    [AppRoutes.ERROR]:{
        path:RouterPath.error,
        element:<NotFoundPage/>
    }
}