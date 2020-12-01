import axios from 'axios';

const unsplashUrl = 'https://api.unsplash.com';

export default axios.create({
	baseURL: unsplashUrl,
	headers: {
		Authorization: 'Client-ID ivuoiwrzt0PESOgs8s0zfCUacSk2OEjYT23Y4yPYyKc'
	}
});