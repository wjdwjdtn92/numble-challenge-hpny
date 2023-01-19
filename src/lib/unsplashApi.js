import { request } from './api';

const ACCESS_KEY = 'sBI2FsgQxLSIs5V_mcgewSlrD4SXsv1HfLQ7F1KkN58';
const API_URL = 'https://api.unsplash.com';

export async function getRandomPhoto() {
  return await request(
    `${API_URL}/photos/random?count=1&client_id=${ACCESS_KEY}`,
  );
}
