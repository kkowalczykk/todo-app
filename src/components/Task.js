import React from 'react';

const Task = (props) => {
      const { date, text, id, active, priority, finishDate } = props.task;

      const priorityStyle = {
            color: 'red',
      }

      if (active) {
            return (
                  <div>
                        <p>
                              <strong style={priority ? priorityStyle : null}>{text}</strong> - do before: <span>{date}</span>
                              <button onClick={() => props.changeStatus(id)}>Done</button>
                              <button onClick={() => props.delete(id)}>X</button>
                        </p>

                  </div>
            );
      } else {
            const finish = new Date(finishDate).toLocaleString();
            return (
                  <div>
                        <p>
                              <strong>{text}</strong> <em>( till: <span>{date}</span>)</em><br />
                              Confirmation of the task: <span><b>{finish}</b></span>
                              <button onClick={() => props.delete(id)}>X</button>
                        </p>

                  </div>
            );
      }
}

export default Task;