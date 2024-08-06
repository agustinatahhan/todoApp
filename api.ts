import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error("Failed to add todo:", error);
    throw error;
  }
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const updatedTodo = await res.json();
    return updatedTodo;
  } catch (error) {
    console.error("Failed to add todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Failed to add todo:", error);
    throw error;
  }
};
