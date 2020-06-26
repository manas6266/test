import axios from 'axios';
const instance=axios.create({
	baseURL:'https://react-my-burgerapp-32f83.firebaseio.com/'
});
export default instance; 