import axios from 'axios';

const instance = axios.create({
   baseURL: "https://tgame-a2ba2.firebaseio.com"
});


export default instance;
