import axios from 'axios';

class apiClient {
  constructor(url){
    this.url = url;
  }

  get(module = 'about.txt', params = { }){
    return axios.get(`${this.url}/${module}`, params);
  }
}

export default apiClient;
