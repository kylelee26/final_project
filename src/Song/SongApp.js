import React from "react";
import "./SongApp.css";
import TodoApp from "./components/TodoApp";
import auth from "./components/Auth";
function App(props) {
  return (
    <div className="App">
      <span className="title">我的歌單</span> <br />
      <TodoApp />
      <button className="bttn"
      onClick={() => {
          auth.login(() => {
            props.history.push("/pricing");
          });
        }
      }>
      回首頁
      </button>
    </div>
  );
}

export default App;
