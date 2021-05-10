import { api } from "..";

export const getAllAchievement = () => api.get('/achievements')
export const updateAchievement = (id, body) => api.put(`/achievements/${id}`, body)
export const newAchievement = body => api.post(`/achievements`, body)
export const deleteAchievement = id => api.delete(`/achievements/${id}`)
