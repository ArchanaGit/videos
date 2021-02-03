import axios from 'axios';


const KEY='AIzaSyCVI79ZdoZO5RgYVsRGbRQhRBcIeDqDnws';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});