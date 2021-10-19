import { connect } from 'react-redux';
import TaskFormComponent from "../Components/TaskFormComponent";
import {changeCurrentTaskAction, addTaskAction} from '../Actions/tasksAction';

const TaskFormContainer = connect(
  state => ({currentTask: state.currentTask}),
  dispatch => ({
    handleCurrentTask: currentTask => dispatch(changeCurrentTaskAction(currentTask)),
    handleAddCurrentTask: currentTask => dispatch(addTaskAction(currentTask))
  })
)(TaskFormComponent)

export default TaskFormContainer;