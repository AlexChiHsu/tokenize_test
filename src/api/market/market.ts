export const getMarkets = async () => {
  const url = 'https://api.tokenize-dev.com/mobile-api/market/getmarkets';
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
    'user-agent': 'Android;1.15.0',
    'TOK-DEVICE-ID': 'ea278b7741967a5e',
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    const data = await response.json();

    if (response.ok) {
    } else {
      console.log(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMarketsSummaries = async () => {
  const url = 'https://api.tokenize-dev.com/public/v1/market/get-summaries';

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();

    if (response.ok) {
    } else {
      console.log(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
