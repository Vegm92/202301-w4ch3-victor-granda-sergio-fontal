export interface KeyProps {
  keyClass: string;
  text: string;
}

const Key = ({ keyClass, text }: KeyProps) => {
  return (
    <li>
      <button className={`key key--${keyClass}`}>{text}</button>
    </li>
  );
};

export default Key;
