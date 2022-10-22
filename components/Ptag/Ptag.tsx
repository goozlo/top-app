import React from 'react';
import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from "classnames";

export const Ptag = ({fontSize = '14px', children, ...props}: PtagProps) => {
    return (
        <p className={cn(styles.small, {
            [styles.small]: fontSize === '14px',
            [styles.medium]: fontSize === '16px',
            [styles.large]: fontSize === '18px'
        })} {...props}
        >
            {children}
        </p>
    );
};


