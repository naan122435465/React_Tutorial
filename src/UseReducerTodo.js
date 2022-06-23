import { useReducer, useRef } from "react";
import React from "react";
//InitState
const initState = {
  job: "",
  jobs: [],
};
//action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payLoad) => {
  return {
    type: SET_JOB,
    payLoad,
  };
};
const addJob = (payLoad) => {
  return {
    type: ADD_JOB,
    payLoad,
  };
};
const deleteJob = (payLoad) => {
  return {
    type: DELETE_JOB,
    payLoad,
  };
};
// reducer
const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payLoad,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payLoad],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(state.payLoad, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("invalid action");
  }
  return newState;
};

// dispatch
function UseReducerTodo() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job}
              <span
                onClick={() => {
                  dispatch(deleteJob(index));
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseReducerTodo;
