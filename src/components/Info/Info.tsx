import "./Info.css";

interface InfoProps {
  className: "message" | "off";
}

export const Info = ({ className }: InfoProps) => {
  return className === "message" ? (
    <span className={`${className}`}>Calling...</span>
  ) : (
    <span className={`${className}`}>Hang Up</span>
  );
};
