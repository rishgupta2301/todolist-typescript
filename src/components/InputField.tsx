import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          className="input__box"
          placeholder="Enter task here"
        ></input>
        <button type="submit" className="input_submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
