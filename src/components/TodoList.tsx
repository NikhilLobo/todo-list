import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { List, Typography } from "antd";
import TodoItem from "./TodoItem";
const { Text } = Typography;
const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <List
      bordered
      header={<Text strong>{`Items: ${todos.length}`}</Text>}
      dataSource={todos}
      size="large"
      renderItem={(todo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodoList;
