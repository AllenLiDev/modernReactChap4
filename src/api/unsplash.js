import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0385f3083c5f3812e71c52ad7464f74f5fe4efe9fc68de8372b2a1b3a3a664c0'
      }
});