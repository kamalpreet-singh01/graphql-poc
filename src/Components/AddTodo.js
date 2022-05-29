import React, { useEffect, useState } from 'react';
import {ADD_TODO} from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [id,setId]= useState(0);

    const [createTodo, {error}] = useMutation(ADD_TODO)
    const onSubmit = (e)=>{
        e.preventDefault();
        const newTodo = {
            id:parseInt(id),
            title: title,
            completed: status==="Completed",
            userId: 2
        }
        console.log(newTodo)
        createTodo({
            variables: newTodo
        });
        if(error){
            console.log(`Error occured: ${error}`);
        }
    }

    return(
        <div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label>ID</label>
                <input type="number" value={id} onChange={(e)=>setId(parseInt(e.target.value))}></input>
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option value="Completed">Completed</option>
                    <option value="InComplete">In Progress</option>
                </select>
                <button type='Submit'>Add Todo</button>
            </form>
        </div>
    )

}


export default (AddTodo);


