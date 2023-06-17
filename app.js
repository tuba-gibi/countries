window.addEventListener =
  ("load",() => {
    getData();
  });
// window.onload = func(){
//     getData()
// }

const getData = async () => {
  const URL ="https://restcountries.com/v3.1/all";
  // const API_KEY = ""
  const response = await fetch(URL);
  console.log(response);
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
};
