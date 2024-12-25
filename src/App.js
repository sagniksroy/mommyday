import background from "./images/im.jpg";
import body from "./images/1000086436.png";
import "./App.css";

function App() {
  return (
    <div className="img" style={{ backgroundImage: `url(${background})` }}>
        <img src={body} alt="body" />
    </div>
);
}

export default App;
