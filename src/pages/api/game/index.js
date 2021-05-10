import { api } from "..";

export const getGameModeByCategory = categoryId => api.get(`/words/mode/${categoryId}`)
export const getGameModeByRandomWords = () => api.get(`/words/mode/random`)
