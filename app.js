window.addEventListener("load", () => {
  getData();
});

const getData = async () => {
  const URL = "https://restcountries.com/v3.1/all";
  const res = await fetch(URL);
  try {
    if (!res.ok) {
      throw new Error("hatasız kul olmaz 😅");
    }
    const data = await res.json();
    // console.log(data);
    getName(data);
  } catch (err) {
    console.log(err);
  }
};

const getName = (arr) => {
  arr.map((item) => {
    // const cName = item.name.common
    // console.log(cName)
    const select = document.querySelector(".form-select");
    select.innerHTML += `
    <option value="1">${item.name.common}</option>
    `;
  });
};

const writeDOM = (w) => {
  const {
    flags: { png },
    name: { common },
    region,
    capital,
    languages,
    currencies,
    population,
    borders,
    maps: { googleMaps },
  } = w;

  const cardSection = document.getElementById("card");
  cardSection.innerHTML = `
  <div class="card m-auto mt-4" style="width: 28rem">
        <img src="${png}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title fs-2">${common}</h5>
        </div>
        <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-landmark"></i>
      <span class="fw-bold"> Capitals:</span> ${capital}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-comments"></i>
      <span class="fw-bold"> Languages:</span> ${languages}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-money-bill-wave"></i>
      <span class="fw-bold"> Currencies:</span> ${currencies}
    </li>
    <li class="list-group-item">
    <i class="fa-solid fa-people-group"></i></i>
    <span class="fw-bold"> Population:</span> ${population}
  </li>
    <li class="list-group-item">
    <i class="fa-sharp fa-solid fa-road-barrier"></i>
    <span class="fw-bold"> Borders:</span> ${borders}
  </li>
  </li>
  <li class="list-group-item">
    <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href= ${googleMaps}
       target='_blank'> Go to google map</a> </li>
  </ul>
      </div>
  
  
  `
};
