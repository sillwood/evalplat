import { ReactNode } from 'react';

interface Props {
    text: string;
    onClick: () => void;
    modifiers?: string;
    children?: ReactNode;
}

export const Button = ({ text, onClick, modifiers, children }: Props) => {
    return (
        <div
            className={`m-auto inline-flex items-center rounded-lg bg-primary py-2 px-4 text-center text-base  text-gray-300  hover:cursor-pointer hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-primary dark:hover:bg-green-700 dark:focus:ring-green-800 ${modifiers}`}
            onClick={onClick}
        >
            {text}
            {children}
        </div>
    );
};
