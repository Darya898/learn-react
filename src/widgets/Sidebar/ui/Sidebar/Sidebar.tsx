import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Button, ButtonSize, ThemeButton} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RouterPath} from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/list.svg';

interface SidebarProps {
  className?:string;
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed,setCollapsed]=useState(false);
    const {t}=useTranslation();
    const onToggle=()=>{
        setCollapsed(prev=>!prev);
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <Button
                size={ButtonSize.M}
                data-testid="sidebar-toggle"
                square
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onToggle}>{collapsed?'>':'<'}</Button>
            <div className={cls.items}>
                    <AppLink theme={AppLinkTheme.SECONDARY}
                             to={RouterPath.main}
                             className={cls.item}
                             >
                        <MainIcon className={cls.icon}/>
                       <span className={cls.link}>Главная</span> </AppLink>

                    <AppLink theme={AppLinkTheme.SECONDARY}
                             to={RouterPath.about}
                             className={cls.item}
                            >
                        <AboutIcon className={cls.icon}/>
                      <span  className={cls.link}>О сайте</span>
                        </AppLink>
           </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};
