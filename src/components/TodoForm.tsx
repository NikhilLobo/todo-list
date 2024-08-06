import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import { Input, Button } from "antd";
import { AppDispatch } from "../store";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = useCallback(() => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  }, [text, dispatch]);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Input
        placeholder="What needs to be done?"
        value={text}
        prefix={<EditOutlined />}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={handleSubmit}
      />
      <Button
        type="primary"
        onClick={handleSubmit}
        size="large"
        disabled={!text.trim()}
        icon={<PlusOutlined />}
      >
        ADD
      </Button>
    </div>
  );
};

export default TodoForm;
