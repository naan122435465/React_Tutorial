import { useReducer, useRef } from "react";
import React  from "react";
import reducer ,{initState} from './reducer'
import {addJob,setJob,deleteJob} from './actions'

function UseReducerTodo() {
    const [state, dispatch] = useReducer( reducer,initState)
    const {job, jobs} = state
    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div style={{pading: '0 20px'}}>
            <h3>Todo</h3>
            <input 
            ref={inputRef}
            placeholder="Enter todo..."
            value={job}
            onChange={e =>{
                dispatch(setJob(e.target.value))
            }}
            
            />
            <button 
            onClick={handleSubmit}
            >
            Add
            </button>
            <ul>
                {jobs.map((job,index) => {
                    return(
                        <li key={index}>
                        {job} 
                        <span onClick={() => {
                            dispatch(deleteJob(index))
                        }}>
                        &times;
                        </span>
                        
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default UseReducerTodo