import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/todos';

export const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTodo = async (task) => {
    try {
        const response = await axios.post(API_URL, { task },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return response.data;
    } catch (error) {
    console.error("Error sending request:", error.response ? error.response.data : error);
    }
};

export const updateTodo = async (id, todo) => {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
};

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
