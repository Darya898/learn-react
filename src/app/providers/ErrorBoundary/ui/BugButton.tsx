import React, {useEffect, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
interface BugButtonProps {
    className?:string;

}

export const BugButton = ({className}:BugButtonProps) => {
    const [error,setError]=useState(false);
    const onThrow=()=>setError(true);
    const {t}=useTranslation();
    useEffect(()=>{
        if(error){
            throw new Error();
        }
    },[error])
    return (
        <Button
            onClick={onThrow}
       >
            {t('throw error')}
        </Button>
    );
};

export default BugButton;