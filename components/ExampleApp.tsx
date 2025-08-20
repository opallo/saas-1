'use client';

import { useState } from "react";

export default function ExampleApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    setTasks([...tasks, trimmed]);
    setTask("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-xl">
      <h3 className="mb-4 text-xl font-semibold text-white">Example Todo App</h3>
      <div className="flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task"
          className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        />
        <button
          onClick={addTask}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.length === 0 && (
          <li className="text-sm text-gray-400">No tasks yet.</li>
        )}
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex items-center justify-between rounded-md bg-gray-700 px-3 py-2 text-sm text-white"
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(i)}
              className="text-red-400 hover:text-red-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

