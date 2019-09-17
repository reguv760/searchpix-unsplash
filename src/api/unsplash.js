import axios from 'axios';
import dotEnv from 'dotenv';

//unsplash API:::
//access ::: ee29d0e793688b9c25b7abe767e8262105f35fde422288dff7192ba2daa403f8
//secret ::: bab03f32d7297bbc5523959ff53effe5c386cfad14476c88cb4b1bfc967a65f3
//install dotEnv to use these keys offline

//create instance of axios client
//that's customizable



//this is how you create instance
//of an axios object

dotEnv.config();

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: 
    {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS} `
    }
})