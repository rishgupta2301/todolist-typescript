import React from "react";
import "./styles.css";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }: Props) => {
    const handleDone = (id:number) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                todo.isDone=!todo.isDone
            }
            console.log("clicked")
            return todo;
        }))
    }

    const handleDelete=(id:number) => {
        setTodos(todos.filter((todo) => {
            return (todo.id !== id)
        }))
    }
  return (
    <form className="todos__single">
        {
            todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )
        }
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
