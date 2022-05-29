import { gql } from "@apollo/client";

export const LOAD_TODOS = gql`
    query {
        getAllTodo {
            id,title,userId,completed
        }
    }

`