import React, { FC } from "react";
import "app/styles/index.scss";

import {BrowserRouter} from "react-router-dom";
interface Props {
    children?: React.ReactNode;

}
const RouterDecorator: FC<Props> = ({ children}) => {
    return <BrowserRouter>{children}</BrowserRouter>
};
export default RouterDecorator;