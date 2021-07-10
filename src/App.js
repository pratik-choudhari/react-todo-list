import "./App.css";
import ListTasks from "./ListTasks";
import InputTask from "./InputTask";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTask] = useState({ tasks: [] });

  const addTasks = (task) => {
    let tempTasks = tasks["tasks"];
    task = { id: tempTasks.length + 1, text: task, strike: false};
    tempTasks.push(task);
    setTask({ tasks: tempTasks });
  };

  const removeTasks = (taskid) => {
    let tempTasks = tasks["tasks"];
    let result = [];
    for (let i = 0; i < tempTasks.length; i++) {
      console.log(tempTasks[i].id, taskid);
      if (tempTasks[i].id !== +taskid) {
        result.push(tempTasks[i]);
      }
    }
    setTask({ tasks: result });
  };

  const strikeTask = (taskid) => {
    let tempTasks = tasks["tasks"];
    let result = [];
    for (let i = 0; i < tempTasks.length; i++) {
      if (tempTasks[i].id === +taskid) {
        tempTasks[i].strike = true
      }
      result.push(tempTasks[i]);
    }
    setTask({ tasks: result });
  };

  return (
    <div className="App container text-center">
      <InputTask addTaskCallback={addTasks} />
      <ListTasks tasksList={tasks["tasks"]} removeTaskCallback={removeTasks} strikeTaskCallback={strikeTask}/>
    </div>
  );
}

export default App;
