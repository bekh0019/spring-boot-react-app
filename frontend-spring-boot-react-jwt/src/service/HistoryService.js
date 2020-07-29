import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

class HistoryService {
    retrieveHistory = () => axios.get(`${BASE_URL}/history/user/1`)

    retrieveHistoryItem = (id) => axios.get(`${BASE_URL}/historyItem/${id}`)
}

export default new HistoryService();
