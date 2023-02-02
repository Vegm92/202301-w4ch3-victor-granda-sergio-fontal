import Action from "../Action/Action";
import Display from "../Display/Display";

interface ActionsProps {
  number: string;
}

const Actions = ({ number }: ActionsProps): JSX.Element => {
  return (
    <div className="actions">
      <Display number={number} />
      <Action href="call" className="call" text="Call" />
    </div>
  );
};
export default Actions;
