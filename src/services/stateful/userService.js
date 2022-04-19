import { reactive } from "vue";
import { API_URL, getToken } from "@/api";

const ROUTE = `${API_URL}users`;
const initialState = {
  users: [],
  total_pages: 0,
  page: 1,
  params: {
    page: 0,
    count: 6,
  },
};
const state = reactive(initialState);
export const fields = () => {
  return {
    name: "",
    email: "",
    phone: "",
    position_id: null,
    photo: null,
  };
};

const checkError = function (response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const usersComputed = {
  showMore: {
    get() {
      return state.total_pages && state.total_pages > state.page;
    },
  },
  users: {
    get() {
      return state.users
        .slice()
        .sort((a, b) =>
          a.registration_timestamp > b.registration_timestamp ? -1 : 1
        );
    },
  },
};
// eslint-disable-next-line no-unused-vars
const fetchUsers = function (params) {
  const url = `${ROUTE}?` + new URLSearchParams(params).toString();
  return fetch(url)
    .then(checkError)
    .catch(function (err) {
      console.log(err);
    });
};

export const addUser = (user) => state.users.unshift(user);

export const getUsers = async function (loadNextPage = false) {
  if (loadNextPage) {
    state.params.page +=
      !state.total_pages || state.params.page < state.total_pages ? 1 : 0;
  } else {
    state.params.page = 1;
  }
  const data = await fetchUsers(state.params);
  if (!data.success) {
    return;
  }

  state.users = loadNextPage ? state.users.concat(data.users) : data.users;
  state.total_pages = data.total_pages;
  state.page = data.page;
};
export const registerUser = async function (data) {
  const token = await getToken();
  if (!token) throw "No token";
  return await postUser({ token, data });
};

export const getUser = async function (id) {
  return await fetch(`${ROUTE}/${id}`)
    .then(checkError)
    .then((data) => data.user)
    .catch(function (err) {
      console.log(err);
    });
};

const postUser = async function (params) {
  const { token, data } = params;
  return fetch(ROUTE, {
    method: "POST",
    body: data,
    headers: { Token: token },
  })
    .then((response) => response.json())
    .catch((err) => err);
};
