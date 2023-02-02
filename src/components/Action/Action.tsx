interface ActionProps {
  href: "call" | "hang-up";
  className: "call" | "hang active";
  text: "Call" | "Hang up";
}

const Action = ({ href, className, text }: ActionProps): JSX.Element => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

export default Action;
