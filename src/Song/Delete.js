import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "../firebase_config";

export default function TodoListItem({ todo, is_in_progress, id }) {
    {/*function toggleInProgress() {
      db.collection("final").doc(id).update({
        is_in_progress: !is_in_progress,
      });
    }*/}
  
    function deleteTodo() {
      db.collection("final").doc(id).delete();
    }
  
    return (
      <div style={{ display: "flex" }}>
        <ListItem>
          <ListItemText
            primary={todo}
          />
        </ListItem>

        <Button onClick={deleteTodo}>刪除</Button>
      </div>
    );
  }