import React, { FC } from "react";
import "app/styles/index.scss";
import { Theme } from "../../../../app/providers/ThemeProvider/index";
interface Props {
    children?: React.ReactNode;
    theme: Theme;
}
const ThemeDecorator: FC<Props> = ({ children, theme }) => {
    return <div className={`app ${theme}`}>{children}</div>
};
export default ThemeDecorator;


