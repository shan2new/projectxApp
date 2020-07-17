import axios from 'axios';

const instance = axios.create({baseURL: process.env.REACT_APP_PROJECTXAPP_URI || 'http://localhost:3000/'});

export default instance;
