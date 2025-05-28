import React, { useState, useEffect } from "react";
import { Input, Checkbox, Button, List, Space, Select } from "antd";

const { Option } = Select;

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [editIndex, setEditIndex] = useState(null); // Který index právě upravujeme
    const [editValue, setEditValue] = useState(""); // Aktuální hodnota pro editaci

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

    const toggleTodo = (index) => {
        const updated = [...todos];
        updated[index].completed = !updated[index].completed;
        setTodos(updated);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const saveEdit = (index) => {
        const updated = [...todos];
        updated[index].text = editValue;
        setTodos(updated);
        setEditIndex(null);
        setEditValue("");
    };

    const sortedTodos = [...todos].sort((a, b) => {
        return sortOrder === "newest"
            ? b.createdAt - a.createdAt
            : a.createdAt - b.createdAt;
    });

    return (
        <div style={{ maxWidth: 500, margin: "2rem auto" }}>
            <Space style={{marginBottom: 16}} direction="vertical" size="middle">
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
                    style={{width: 200}}
                >
                    <Option value="newest">Nejnovější nahoře</Option>
                    <Option value="oldest">Nejstarší nahoře</Option>
                </Select>
            </Space>

            <List
                bordered
                dataSource={sortedTodos}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[
                            editIndex === index ? (
                                <Button type="link" onClick={() => saveEdit(index)}>
                                    Uložit
                                </Button>
                            ) : (
                                <Button
                                    type="link"
                                    onClick={() => {
                                        setEditIndex(index);
                                        setEditValue(item.text);
                                    }}
                                >
                                    Upravit
                                </Button>
                            ),
                            <Button type="link" danger onClick={() => deleteTodo(index)}>
                                Smazat
                            </Button>,
                        ]}
                    >
                        <Checkbox
                            checked={item.completed}
                            onChange={() => toggleTodo(index)}
                            style={{ marginRight: 8 }}
                        />
                        <div style={{ textAlign: "left", marginLeft: 8 }}>
                            {editIndex === index ? (
                                <Input
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onPressEnter={() => saveEdit(index)}
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
