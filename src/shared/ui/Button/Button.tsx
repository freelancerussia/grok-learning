import type {ButtonHTMLAttributes, FC} from "react";
import  classNames from "classnames";
import s from './Button.module.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, disabled, ...otherProps } = props;

    return (
        <button
            className={classNames(s.button, className)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
