import axios from 'axios';

const urlAPI = 'http://localhost:5000';

const getTodosList = (id = '0') => axios.get(`${urlAPI}/todoslist/${id}`);
const addTodosList = (data = {}) => axios.put(`${urlAPI}/todoslist`, data);

export default {
  getTodosList,
  addTodosList,
};
