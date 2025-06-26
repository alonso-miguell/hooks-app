/*

A reducer:
 *** shouldn't have side effects (call other functions)
 *** shouldn't use async tasks
 *** always should retuern a new state (this due to react shallow comparison,
     so we can avoid bugs and properly detect changes and trigger re-renders
 *** shouldn't call localStorage or sessionStorage (this is considered a side effect)
 *** can only have one action and this one can (or cannot) contain a single parameter
 */


const initialState = [{
    id: 1,
    toDo: "default toDo",
    done: false
}];

const secondState = [{
    id: 2,
    toDo: "second toDo",
    done: true
}];

const undefined = {};

const toDoAction={
    type: "SECOND_TO_DO",
    payload: secondState,
}

const undefinedAction={
    type: "UNDEFINED_TO_DO",
    payload: undefined,
}

const toDoReducer =( state=initialState, action={}) =>{

    if(action.type==='SECOND_TO_DO'){
        return [ ...state, action.payload  ];
    }
    // console.log(state);

    return state;
}

let toDos=toDoReducer();
console.log(toDos);
toDos=toDoReducer(toDos, toDoAction);
console.log(toDos);

toDos=toDoReducer(toDos, undefinedAction);
console.log(toDos);
