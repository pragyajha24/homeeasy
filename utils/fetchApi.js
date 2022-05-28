import axios from "axios";

 export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': 'a4b05e84a4msh1e89ee4127c2420p1fdd04jsn8642393b3550'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "a4b05e84a4msh1e89ee4127c2420p1fdd04jsn8642393b3550",
    },
  });
  return data;
};
