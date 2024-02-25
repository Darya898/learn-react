import './../../../../app/styles/index.scss';
import { FC } from 'react';
import React from "react";

interface Props {
    children?: React.ReactNode;
}

const StyleDecorator:FC=({children})=>{return <div >{children}</div>};
export default StyleDecorator;
