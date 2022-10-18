interface Props {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
    return (
        <button
            className="inline-flex items-center rounded-lg bg-primary py-2 px-4 text-center text-lg  text-gray-300  hover:cursor-pointer hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-primary dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={onClick}
        >
            {text}
        </button>
    );
};
