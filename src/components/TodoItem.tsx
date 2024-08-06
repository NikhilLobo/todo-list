import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todosSlice";
import { List, Button } from "antd";
import { AppDispatch } from "../store";
import { Todo } from "../features/todos/todosTypes";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <List.Item
      actions={[
        <Button type="link" onClick={() => dispatch(removeTodo(todo.id))}>
          REMOVE
        </Button>,
      ]}
    >
      {todo.text}
    </List.Item>
  );
};

export default TodoItem;
