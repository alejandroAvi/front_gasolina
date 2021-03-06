const BASE_API = 'http://127.0.0.1:8000/api/v1/get_gasolina';

export const getPrice = async (municipio, estado, ordenar) => {
    const url = `${BASE_API}?municipio=${municipio}&estado=${estado}&ordenar=${ordenar}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    return await res.json();
};