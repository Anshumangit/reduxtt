import React from 'react';
import { ADD_TASK, CHANGE_PERSON, newTaskDsp } from '../actions';
import { connect } from 'react-redux';

const Container = ({ addtask, newTask, changePerson, personname }) => {
  // console.log(addtask);
  // console.log(newTask);

  const tasklist = addtask.map((cval, index) => {
    console.log(cval);
    return <h2 key={index}>{cval}</h2>;
  });

  return (
    <>
      <div>
        <h2>Container Component : My hobbies are</h2>
        {tasklist}
      </div>
      <h2>Person name : {personname}</h2>
      <button
        onClick={() => {
          newTask();
        }}>
        add task
      </button>
      <button
        onClick={() => {
          changePerson();
        }}>
        change person
      </button>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    addtask: store.wish,
    personname: store.person[1].name,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  return {
    newTask: () => {
      dispatch(newTaskDsp(ownProps));
    },
    changePerson: () => {
      dispatch({ type: CHANGE_PERSON, payload: 'Sandy' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
