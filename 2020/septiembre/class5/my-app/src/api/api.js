async function postData(url = '', data = {}, method = 'POST') {
  const params = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };
  if (data) params.body = JSON.stringify(data);
  const response = await fetch(url, params);
  return response.json(); // parses JSON response into native JavaScript objects
}

export default postData;
