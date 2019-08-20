import React from 'react';
import Task from './Task';
const TaskList = (props) => {

      const active = props.tasks.filter(task => task.active);
      const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus} />)

      const finished = props.tasks.filter(task => !task.active);
      const finishedTasks = finished.map(task => <Task key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus} />)

      return (
            <div className="TaskList">
                  <div className="active-task">
                        <h2>Task List</h2>
                        {activeTasks}

                  </div>
                  {/* <hr /> */}
                  <div className="finished-task">
                        <h2>Finished Tasks</h2>
                        {finishedTasks}
                  </div>
            </div>
      );
}

export default TaskList;