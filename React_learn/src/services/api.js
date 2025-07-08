const API_KEY = "4c225b00c57306e514138a55be439d95";
const BASE_URL = "https://api.themoviedb.org/3";

export const getpopmovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data= await response.json()
  return data.results
};
export const searchmov = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data= await response.json()
  return data.results
};