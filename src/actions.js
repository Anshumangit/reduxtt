export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_PERSON = 'CHANGE_PERSON';

export const changeNameDsp = () => {
  return async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const resp = await data.json();
    dispatch({ type: CHANGE_NAME, payload: resp[0].name });
  };
};

export const newTaskDsp = (ownProps) => {
  return { type: ADD_TASK, payload: ownProps.hobby };
};

//ActionCreator is nothing but a function which returns actions
//actions-type and payload
