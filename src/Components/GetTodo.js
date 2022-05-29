import React from 'react'
import { gql, useQuery } from "@apollo/client";
import {LOAD_TODOS} from '../GraphQL/Queries';

function GetTodos() {

  const {error,loading,data} = useQuery(LOAD_TODOS);
  const [todos, setTodos] = React.useState([])
  React.useEffect(()=>{
    console.log(data);
    if(data){setTodos(data.getAllTodo)}
  },[data])
  return (
    <div>{todos.map((todo)=>{
      return <div className='card'><h3>ID: {todo.id}</h3><hr/>
        <h3>Title: {todo.title}</h3><hr/>
        <h4>Completed: {todo.completed ? "Completed":"Incomplete"}</h4>
      </div>
    })}</div>
  )
}

export default GetTodos