import { connect } from 'react-redux';
import TasksComponent from "../Components/TasksComponent";

const TasksContainer = connect(
  state => ({tasks: state.tasks}),
  _dispatch => ({})
)(TasksComponent)

export default TasksContainer;