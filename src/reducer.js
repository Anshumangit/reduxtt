import { CHANGE_NAME, ADD_TASK, CHANGE_PERSON } from './actions';

const istore = {
  name: 'anshuman',
  wish: ['eat', 'sleep', 'code'],
  person: [
    {
      add1: 'abc',
      add2: 'def',
    },
    {
      name: 'avi',
      age: 28,
    },
  ],
};

const reducer = (state = istore, action) => {
  console.log();
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === ADD_TASK) {
    return {
      ...state,
      wish: [...state.wish, action.payload],
    };
  }
  if (action.type === CHANGE_PERSON) {
    return {
      ...state,
      person: [
        {
          ...state.person[0],
        },
        {
          ...state.person[1],
          name: action.payload,
        },
      ],
    };
  }
  return state;
};

export default reducer;
