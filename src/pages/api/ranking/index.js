import { api } from "..";

export const createPlayerInRanking = (body) => api.post("/rankings", body);
export const getRanking = () => api.get("/rankings");
