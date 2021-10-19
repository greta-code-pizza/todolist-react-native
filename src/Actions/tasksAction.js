export const addTaskAction = (taskComponent) => ({
    type: "ADD_TASK",
    payload: {task: taskComponent}
  })

export const changeCurrentTaskAction = currentTask => 
({ 
  type: "CHANGE_CURRENT_TASK",
  payload: { currentTask: currentTask } 
})

