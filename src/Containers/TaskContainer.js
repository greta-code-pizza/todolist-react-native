import React from 'react';
import { connect } from "react-redux";
import TaskComponent from "../Components/TaskComponent";

const TaskContainer = connect(
  (_state, props) => ({task: props.task}),
  _dispatch => ({})
)(TaskComponent)

export default TaskContainer;