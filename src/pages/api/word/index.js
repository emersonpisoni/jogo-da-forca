import { api } from "..";

export const getAllWord = () => api.get('/words')
export const updateWord = (id, body) => api.put(`/words/${id}`, body)
export const newWord = body => api.post(`/words`, body)
export const deleteWord = id => api.delete(`/words/${id}`)
