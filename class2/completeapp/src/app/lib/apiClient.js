import axios from 'axios';


const apiClient = (settings = {}) => {

    const localSettings = {
      host: settings.host || 'localhost',
      protocol: settings.protocol || 'http',
      port: settings.port || 80,
    };

    return new class {
      fetch(url, params) {
        return axios.get(`${localSettings.protocol}://${localSettings.host}${url}`, params);
      }

      post(path, params) {
        const url = `${localSettings.protocol}://${localSettings.host}:${settings.port}${path}`;
        console.info('url: ', url, params);
        return axios.post(url, params);
      }
    };
};


export default apiClient;
