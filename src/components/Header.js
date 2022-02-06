import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_NAME } from '../actions';
import { changeNameDsp } from '../actions';

const Header = ({ name, wish, changename }) => {
  return (
    <>
      <h2>Header Component: My name is {name}</h2>
      {/* <h2>Header Component: I wish to {wish}</h2> */}
      <button
        onClick={() => {
          changename();
        }}>
        change name
      </button>
    </>
  );
};

const mapStateToProps = (store) => {
  // console.log(store);
  return {
    name: store.name,
    // wish: store.wish[2]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changename: () => {
      dispatch(changeNameDsp()); //using action creator
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
