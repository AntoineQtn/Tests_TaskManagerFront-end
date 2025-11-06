import axios from 'axios';

/**
 * Client API pour communiquer avec le serveur Spring Boot.
 * @see https://axios-http.com/docs/intro
 * @type {axios.AxiosInstance}
 */
const apiClient = axios.create({
    baseURL: '/tasks', // Le proxy redirigera vers http://localhost:8080/tasks
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

/**
 * A service for managing hello messages via API calls.
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export default {
    getHello() {
        return apiClient.get(`/hello`);
    }
};

/**
 * A service for managing tasks via API calls.
 */
export const taskService = {
    /**
     * Fetches a list of tasks from the server.
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getTasks() {
        return apiClient.get(`/tasks`);
    },
    /**
     * Creates a new task on the server.
     * @param task
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createTask(task) {
        return apiClient.post('/tasks', task);
    },
    /**
     * Updates the status of a task on the server.
     * @param id
     * @param status
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateTaskStatus(id, status) {
        return apiClient.put(`/tasks/${id}/status`, status);
    },
    /**
     * Deletes a task from the server.
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteTask(id) {
        return apiClient.delete(`/tasks/${id}`);
    }
};