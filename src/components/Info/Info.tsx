import "./Info.css";

interface InfoProps {
  className: "message" | "off";
}

const Info = ({ className }: InfoProps) => {
  return className === "message" ? (
    <span className={`${className}`}>Calling...</span>
  ) : (
    <span className={`${className}`}>Hang Up</span>
  );
};

export default Info;
