const URL = "http://dog-api.kinduff.com/api/facts?number=2";
const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = toString(data);
  console.log(data);
};

fetchData();
