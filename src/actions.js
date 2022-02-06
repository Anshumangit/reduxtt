export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_PERSON = 'CHANGE_PERSON';

export const changeNameDsp = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const resp = await data.json();
  console.log(resp);
  return { type: CHANGE_NAME, payload: resp.name };
};

export const newTaskDsp = (ownProps) => {
  return { type: ADD_TASK, payload: ownProps.hobby };
};

//ActionCreator is nothing but a function which returns actions
//actions-type and payload
