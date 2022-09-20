interface Props {
  text: string;
  handleClick: () => void;
}

export const Button = ({ text, handleClick }: Props) => {
  return <button onClick={handleClick}>{text}</button>;
};
