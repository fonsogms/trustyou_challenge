import axios from 'axios';

export const distributionOfAnswers = async () => {
  try {
    const {data} = await axios.get(
      'https://front-end-technical-test-api.integration.eu.cloud.trustyou.net/review-distribution',
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const chatSocket = (username) => {
  const ws = new WebSocket(
    'wss://ws-probation-day-chat.integration.eu.cloud.trustyou.net/ws?username=' +
      username,
  );
  return ws;
};
