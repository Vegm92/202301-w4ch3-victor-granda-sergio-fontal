import Info from "./components/Info/Info";
import KeyBoard from "./components/KeyBoard/KeyBoard";

const App = (): JSX.Element => {
  const className = "message";

  return (
    <div className="container">
      <Info className={className} />
      <main className="phone">
        <div className="keyboard-container">
          <KeyBoard />
        </div>
        <div className="actions">
          <span className="number">667359961</span>
          <a href="call" className="call">
            Call
          </a>
          <a href="hang-up" className="hang active">
            Hang up
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
