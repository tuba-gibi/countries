window.addEventListener = ("load", () =>{
    getData();
})
// window.onload = func(){
//     getData()
// }

const getData = async() =>{
    const URL = "https://restcountries.com/v3.1/all?fields=name,flags`"
    fetch('https://api.github.com/users/jessica-murphy/repos')
  .then(res => res.json())
}