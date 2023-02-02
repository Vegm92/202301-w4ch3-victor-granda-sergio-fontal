import "./Display.css";

interface DisplayProps {
  number: string;
}

const Display = ({ number }: DisplayProps): JSX.Element => {
  return <span className="number">{number}</span>;
};

export default Display;
