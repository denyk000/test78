//const apiUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/";
const users = {
  success: true,
  page: 1,
  total_pages: 10,
  total_users: 47,
  count: 5,
  links: {
    next_url:
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=5",
    prev_url: null,
  },
  users: [
    {
      id: "30",
      name: "Angel",
      email: "angel.williams@example.com",
      phone: "+380496540023",
      position: "Designer",
      position_id: "4",
      registration_timestamp: 1537777441,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg",
    },
    {
      id: "29",
      name: "Mattie",
      email: "mattie.lee@example.com",
      phone: "+380204819073",
      position: "Designer",
      position_id: "4",
      registration_timestamp: 1537691099,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1245cc29.jpeg",
    },
    {
      id: "36",
      name: "Joshua",
      email: "joshua.dean@example.com",
      phone: "+380542161925",
      position: "Designer",
      position_id: "4",
      registration_timestamp: 1537661281,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1e527036.jpeg",
    },
    {
      id: "37",
      name: "Lisa",
      email: "lisa.medina@example.com",
      phone: "+380564753087",
      position: "Security",
      position_id: "3",
      registration_timestamp: 1537639019,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba20bd9537.jpeg",
    },
    {
      id: "42",
      name: "Lorraine",
      email: "lorraine.morris@example.com",
      phone: "+380945198009",
      position: "Designer",
      position_id: "4",
      registration_timestamp: 1537629182,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg",
    },
    {
      id: "42",
      name: "Lorraine",
      email: "lorraine.morris@example.com",
      phone: "+380945198009",
      position: "Designer",
      position_id: "4",
      registration_timestamp: 1537629182,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg",
    },
  ],
};
const getPositions = async function () {
  //return await (await fetch(`${apiUrl}positions`)).json();
  return {
    positions: [
      { id: 1, name: "Lawyer" },
      { id: 2, name: "Content manager" },
      { id: 3, name: "Security" },
      { id: 4, name: "Designer" },
    ],
  };
};
export default { users, getPositions };
