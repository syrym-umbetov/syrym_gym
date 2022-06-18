export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d45c2f861msh1c84227fef5bd93p1076f6jsn61d68b9053b8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
