import request from 'axios';
request.defaults.baseURL = 'http://localhost:8081';

export const increment = ({
    commit
}) => commit('INCREMENT');
export const decrement = ({
    commit
}) => commit('DECREMENT');
export const getTopics = ({
    commit,
    state
}) => {
    return request.get('test/1')
        .then(res => {
            if(res.statusText == 'ok') {
                commit('TOPICS_LIST')
            }
        })
}