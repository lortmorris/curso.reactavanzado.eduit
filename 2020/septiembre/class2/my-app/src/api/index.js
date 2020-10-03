export async function getTodos() {
  try {
    const response = await fetch('http://localhost:8080');
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  getTodos,
};
