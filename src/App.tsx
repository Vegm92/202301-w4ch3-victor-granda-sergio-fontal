import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import KeyBoard from "./components/KeyBoard/KeyBoard";

const App = (): JSX.Element => {
  const className = "message";
  const number = "";

  return (
    <div className="container">
      <Info className={className} />
      <main className="phone">
        <div className="keyboard-container">
          <KeyBoard />
        </div>
        <Actions number={number} />
      </main>
    </div>
  );
};

export default App;
