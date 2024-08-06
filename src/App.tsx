import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: "50vh" }}>
      <Header style={{ backgroundColor: "#001529", padding: "0 24px" }}>
        <Title
          level={2}
          style={{ color: "white", lineHeight: "64px", margin: 0 }}
        >
          Todo List
        </Title>
      </Header>
      <Content
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <TodoForm />
          <TodoList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
