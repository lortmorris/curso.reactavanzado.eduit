import postData from './api';

export async function fetchusers() {
  try {
    const response = await fetch('http://localhost:8080/users/all');
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function saveuser(todo) {
  try {
    const data = await postData('http://localhost:8080/save', { ...todo });
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function removeuser(_id) {
  try {
    const data = await postData('http://localhost:8080/remove', { _id });
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
