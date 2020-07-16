import axios from 'axios';

const jsonPlaceholder = axios.create({
    baseURL: 'https://javabuildtest.df.r.appspot.com'
});

export default jsonPlaceholder;