import React, { useState, useEffect } from "react";
import { Input, Checkbox, Button, List, Space, Select } from "antd";

const { Option } = Select;

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                text: inputValue.trim(),
                completed: false,
                createdAt: Date.now(),
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    const toggleTodo = (createdAt) => {
        const updated = todos.map((todo) =>
            todo.createdAt === createdAt
                ? { ...todo, completed: !todo.completed }
                : todo
        );
        setTodos(updated);
    };

    const deleteTodo = (createdAt) => {
        setTodos(todos.filter((todo) => todo.createdAt !== createdAt));
    };

    const saveEdit = (createdAt) => {
        const updated = todos.map((todo) =>
            todo.createdAt === createdAt ? { ...todo, text: editValue } : todo
        );
        setTodos(updated);
        setEditId(null);
        setEditValue("");
    };

    const sortedTodos = [...todos].sort((a, b) => {
        return sortOrder === "newest"
            ? b.createdAt - a.createdAt
            : a.createdAt - b.createdAt;
    });

    return (
        <div style={{ maxWidth: 500, margin: "2rem auto" }}>
            <Space style={{ marginBottom: 16 }} direction="vertical" size="middle">
                <img
                    src="../image/mojeaamberkey.svg"
                    alt="Moje Amber Logo"
                    className="main-logo"
                />
                <Input
                    placeholder="Nový úkol..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={addTodo}
                />
                <Button type="primary" onClick={addTodo}>
                    Přidat
                </Button>
                <Select
                    value={sortOrder}
                    onChange={(value) => setSortOrder(value)}
                    style={{ width: 200 }}
                >
                    <Option value="newest">Nejnovější nahoře</Option>
                    <Option value="oldest">Nejstarší nahoře</Option>
                </Select>
            </Space>

            <List
                bordered
                dataSource={sortedTodos}
                renderItem={(item) => (
                    <List.Item key={item.createdAt}
                               actions={[
                                   editId === item.createdAt ? (
                                       <Button type="link" onClick={() => saveEdit(item.createdAt)}>
                                           Uložit
                                       </Button>
                                   ) : (
                                       <Button
                                           type="link"
                                           onClick={() => {
                                               setEditId(item.createdAt);
                                               setEditValue(item.text);
                                           }}
                                       >
                                           Upravit
                                       </Button>
                                   ),
                                   <Button
                                       type="link"
                                       danger
                                       onClick={() => deleteTodo(item.createdAt)}
                                   >
                                       Smazat
                                   </Button>,
                               ]}
                    >
                        <Checkbox
                            checked={item.completed}
                            onChange={() => toggleTodo(item.createdAt)}
                            style={{ marginRight: 8 }}
                        />
                        <div style={{ textAlign: "left", marginLeft: 8 }}>
                            {editId === item.createdAt ? (
                                <Input
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onPressEnter={() => saveEdit(item.createdAt)}
                                />
                            ) : (
                                <>
                                    <div
                                        style={{
                                            textDecoration: item.completed ? "line-through" : "none",
                                            color: item.completed ? "#999" : "#000",
                                        }}
                                    >
                                        {item.text}
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#888" }}>
                                        Vytvořeno:{" "}
                                        {new Date(item.createdAt).toLocaleString("cs-CZ")}
                                    </div>
                                </>
                            )}
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}
