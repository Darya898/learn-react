import React from 'react';

import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {classNames} from "../../../shared/lib/classNames/classNames";

interface NavbarProps {
  className?:string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>

            <div className={cls.links}>
/
            </div>
        </div>
    );
};

export default Navbar;




