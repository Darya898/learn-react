import React from "react";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../../lib/classNames/classNames";

export enum ThemeButton{
    CLEAR='clear',
    OUTLINE='outline',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted',
}

export enum ButtonSize{
    L='size_l',
    M='size_m',
    XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?:string;
  theme?:ThemeButton;
  square?:boolean;
  size?:ButtonSize;
}



export const Button:FC<ButtonProps> = (props) => {
    const{className,
          children,
          theme,
          square,
          size=ButtonSize.XL,
        ...otherProps}=props;

    const mods:Record<string, boolean>={
      [cls[theme]]:true,
      [cls.square]:square,
      [cls[size]]:true,
    }
    return (
        <button className={classNames(cls.Button,mods,[className])} {...otherProps}>
            {children}
        </button>
    );
};
