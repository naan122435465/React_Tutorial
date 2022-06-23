import {SET_JOB, ADD_JOB ,DELETE_JOB}  from './constants'

export const initState = {
    job:'',
    jobs:[]
}

const reducer = (state, action) => {
    let newState
    
    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job:action.payLoad
            }
            break
        case ADD_JOB:
            newState=  {
                ...state,
             jobs:[...state.jobs, action.payLoad]
             }   
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(state.payLoad, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default : 
        throw new Error('invalid action')
    }
    return newState
   
}
export default reducer