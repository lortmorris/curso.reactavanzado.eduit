async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

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
