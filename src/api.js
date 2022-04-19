export const API_URL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";
export const getToken = function () {
  return fetch(`${API_URL}token`)
    .then((response) => response.json())
    .then((data) => data.token)
    .catch(function (err) {
      console.log(err);
    });
};

export const getPositions = async function () {
  return fetch(`${API_URL}positions`)
    .then((response) => response.json())
    .then((data) => (data.success ? data.positions : []))
    .catch(function (err) {
      console.log(err);
      return [];
    });
};
