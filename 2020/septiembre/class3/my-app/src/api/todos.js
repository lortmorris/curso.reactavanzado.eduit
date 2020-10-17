import postData from './api';

export async function getTodos() {
  try {
    const response = await fetch('http://localhost:8080');
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function toggleTodo(_id, completed) {
  try {
    const data = await postData('http://localhost:8080/toggle', { _id, completed });
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function removeTodo(_id) {
  try {
    const data = await postData('http://localhost:8080/remove', { _id });
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function saveTodo(todo) {
  try {
    const data = await postData('http://localhost:8080/save', { ...todo });
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  getTodos,
};
