import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./interface";

// Material UI
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import { spacing } from '@mui/system'


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  

  return (
        <Box sx={{
          paddingTop: 15,
          paddingLeft: 15,
          paddingRight: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div>
            <input
              type="text"
              placeholder="Task..."
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Deadline (in Days)..."
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />
          </div>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Button variant="contained" onClick={addTask}>Add Task</Button>
          </Box>

        <Grid 
          container 
          spacing={6}
          alignItems="center" 
          justifyContent="center"
          >
          <Grid item xs={12} md={3}> 
            <Paper className="listDisplay" sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center', 
            }}><div className="todoList">
              {todoList.map((task: ITask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask} />
              })}
            </div></Paper>
          </Grid>
        </Grid>
    </Box>
  );
};

export default App;