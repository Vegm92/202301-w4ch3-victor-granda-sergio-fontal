export interface KeyProps {
  className: string;
  text: string;
}

const Key = ({ className, text }: KeyProps) => {
  return (
    <li>
      <button className={`key ${className}`}>{text}</button>
    </li>
  );
};

export default Key;
