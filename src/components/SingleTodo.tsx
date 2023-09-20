import React from 'react'
import "./styles.css"
import { Todo } from '../model'

interface Props{
    todo:Todo
}

const SingleTodo:React.FC<Props> = ({todo}:Props) => {
  return (
    <div>
      {todo.todo}
    </div>
  )
}

export default SingleTodo
