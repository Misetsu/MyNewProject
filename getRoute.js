import axios from 'axios';

const getRoute = async (start, end) => {
  const url = 'https://valhalla1.openstreetmap.de/route'; // 適切なValhalla APIのエンドポイントに変更
  const body = {
    locations: [
      { lat: start.latitude, lon: start.longitude },
      { lat: end.latitude, lon: end.longitude }
    ],
    costing: 'auto', // 適切なコストプロファイルに変更
    directions_options: {
      units: 'kilometers'
    }
  };

  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getRoute;
