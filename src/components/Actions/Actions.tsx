interface ActionsProps {
  number: string;
}

const Actions = ({ number }: ActionsProps): JSX.Element => {
  return (
    <div className="actions">
      <span className="number">{number}</span>
      <a href="call" className="call">
        Call
      </a>
      <a href="hang-up" className="hang active">
        Hang up
      </a>
    </div>
  );
};
export default Actions;
