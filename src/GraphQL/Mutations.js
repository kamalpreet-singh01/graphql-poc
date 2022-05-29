import { gql } from "@apollo/client";

export const ADD_TODO = gql`
mutation createTodo($id: Int! $title: String! $userId: Int! $completed: Boolean!){
    createTodo(id: $id, title: $title, userId: $userId, completed: $completed){
        id
    }
}
`