import React, { Component } from "react";
import { defaultKanbanTasks } from "./KanbanDefaultTasks";
import "./index.css";

export default class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: defaultKanbanTasks,
      stagesTasks: [],
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    // this.stagesTasks = [];
  }

  componentDidMount(){
    const initializeStageTasks = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
         initializeStageTasks.push([]);
        this.setState({ stagesTasks: initializeStageTasks });
    }
    console.log("The stage tasks before stage wise task separation : " + initializeStageTasks);
    let stageTasksUpd = [];
    if (this.state.tasks.length > 0) {
        for (let task of this.state.tasks) {
        const stageId = task.stage;
        stageTasksUpd[stageId].push(task);
        this.setState({ stagesTasks: stageTasksUpd });
        }
        console.log("The stage tasks after stage wise task separation : " + stageTasksUpd);
    }
  }

  moveToForward = (task) => {
    const stateCopy = [...this.state.tasks];
    const index = task.name.split(" ")[1];

    for (const s in stateCopy) {
      if (Number(s) === Number(index)) {
        task.stage += 1
      }
    }

    stateCopy[index] = task;
    this.setState({
      tasks: stateCopy
    })
  }

  moveToBack = (task) => {
    const stateCopy = [...this.state.tasks];
    const index = task.name.split(" ")[1];

    for (const s in stateCopy) {
      if (Number(s) === Number(index)) {
        task.stage -= 1
      }
    }

    stateCopy[index] = task;
    this.setState({
      tasks: stateCopy
    })
  }



  render() {
    /*
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
    */
    return (
      <div className="mt-20 layout-column justify-content-center align-items-center">
        <div className="mt-50 layout-row">
          {this.state.stagesTasks.map((tasks, i) => {
            return (
              <div className="card outlined ml-20 mt-0" key={`${i}`}>
                <div className="card-text">
                  <h4>{this.stagesNames[i]}</h4>
                  <ul className="styled mt-50" data-testid={`stage-${i}`}>
                    {tasks.map((task, index) => {
                      return <li className="slide-up-fade-in" key={`${i}${index}`}>
                        <div className="li-content layout-row justify-content-between align-items-center">
                          <span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
                          <div className="icons">
                            <button disabled={task.stage === 0} onClick={() => this.moveToBack(task)} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`}>
                              <i className="material-icons">arrow_back</i>
                            </button>
                            <button disabled={task.stage === this.stagesNames.length-1} onClick={() => this.moveToForward(task)} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`}>
                              <i className="material-icons">arrow_forward</i>
                            </button>
                          </div>
                        </div>
                      </li>
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}