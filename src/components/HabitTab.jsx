import React, { useState, useEffect } from "react";
import { Input, Button, Checkbox, List, Space } from "antd";

export default function HabitTab() {
    const [habits, setHabits] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("habits")) || [];
        setHabits(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    const addHabit = () => {
        if (inputValue.trim()) {
            setHabits([...habits, { text: inputValue.trim(), checked: false }]);
            setInputValue("");
        }
    };

    const toggleHabit = (index) => {
        const newHabits = [...habits];
        newHabits[index].checked = !newHabits[index].checked;
        setHabits(newHabits);
    };

    const deleteHabit = (index) => {
        const filtered = habits.filter((_, i) => i !== index);
        setHabits(filtered);
    };

    return (
        <>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Add a Habit"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={addHabit}
                />
                <Button type="primary" onClick={addHabit}>
                    Add
                </Button>
            </Space>

            <List
                dataSource={habits}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[
                            <Button type="link" danger onClick={() => deleteHabit(index)}>
                                Smazat
                            </Button>,
                        ]}
                    >
                        <Checkbox
                            checked={item.checked}
                            onChange={() => toggleHabit(index)}
                            style={{ marginRight: 8 }}
                        />
                        <span>{item.text}</span>
                    </List.Item>
                )}
            />
        </>
    );
}
