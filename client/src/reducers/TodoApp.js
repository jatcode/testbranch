import * as actions from '../actions'

function todos(state = [], action ){
  switch(action.type){
    case actions.ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed:false
        }
      ]
    case actions.TOGGLE_TODO:
      return state.map((todo, index)=>{
        if(index === action.index){
          return Object.assign({},todo,{
            completed:!todo.completed
          })
        }
        return todo
      })
    default:
    return state;
  }
}

export default todos;
