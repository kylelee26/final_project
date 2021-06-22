import React from "react";
import "./SongApp.css";
import TodoApp from "./components/TodoApp";
import auth from "./components/Auth";
import { db } from '../firebase_config';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState,useEffect } from 'react';
import Delete from './Delete';

function App(props) {
  const [todos ,settodos] = useState([]);
  const [todoinput, settodoinput] = useState("")
  useEffect(() => {
    gettodo();
  }, []);
  function gettodo() {
    db.collection("final").onSnapshot(function (querySnapshot) {
      settodos(
        querySnapshot.docs.map((doc) => ({
          id :doc.id,
          todo : doc.data().todo,
          is_in_progress: doc.data().is_in_progress,
        }))
      )
    })
  }

  function addtodo(e) {
    e.preventDefault();
    db.collection("final").add({
      is_in_progress : true,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      todo : todoinput,
    })

    settodoinput();
    
  }
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
      <TextField id="standard-basic" label="" value={todoinput} onChange={(e) => settodoinput(e.target.value) }/>
                <Button onClick={addtodo}   color="primary" variant="contained" className = "add-btn">
                  Click
                </Button>
                {todos.map((todo) => (
            <Delete
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
    </div>
  );
}

export default App;
