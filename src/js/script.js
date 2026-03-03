var Database = {
  keyName: "Mutant Database",
  data: [],
};

// let Personal_Information_List_DOM = document.querySelector(
//   "#Personal_Information_List",
// );

// let Powers_Information_List_DOM = document.querySelector(
//   "#Powers_Information_List",
// );

// let Affiliation_Information_List = document.querySelector(
//   "#Affiliation_Information_List",
// );

let Mutants_Container = document.querySelector(".Mutants_Container");

function displayData(dataArray) {
  Mutants_Container.innerHTML = "";
  dataArray.forEach((Character) => {
    console.log(Character);

    let Personal_Info_LI = "";
    Object.entries(Character.profile).forEach(
      ([key, value]) => {
        let HTML = `<li>${key}: ${value}</li>`;
        Personal_Info_LI += HTML;
      },
    );

      let HTML = `<div class="col">
      <div class="card shadow-lg">
        <img class="Character_Picture" src="${Character.image}">
        <div class="card-body">
          <h5 class="card-title text-center mb-3">${Character.name.alias}</h5>
          <p class="card-text text-center text-muted">${Character.name.firstName} ${Character.name.lastName}</p>
      
          <h6 class="fw-bold">Personal Information:</h6>
          <ul id="Personal_Information_List" class="list-unstyled">
            ${Personal_Info_LI}
          </ul>

          <h6 class="fw-bold">Powers</h6>
          <ul id="Powers_Information_List" class="list-unstyled">
            <li>Heightened Senses</li>
            <li>Regeneration</li>
            <li>Superhuman Strength</li>
            <li>Superhuman Strength</li>
            <li>Superhuman Strength</li>
            <li>Superhuman Strength</li>
          </ul>

          <h6 class="fw-bold">Affiliation</h6>
          <ul id="Affiliation_Information_List" class="list-inline">
            <li class="list-inline-item badge bg-primary">X-MEN</li>
            <li class="list-inline-item badge bg-primary">X-Factor</li>
            <li class="list-inline-item badge bg-primary">Brotherhood</li>
            <li class="list-inline-item badge bg-primary">Avengers</li>
          </ul>


        </div>
      </div>
    </div>`;
    Mutants_Container.insertAdjacentHTML("beforeend", HTML);
  });
}

function Load_Data() {
  let Data = JSON.parse(localStorage.getItem(Database.keyName));
  if (Data != [] && Data != undefined && Data != "") {
    Database.data = Data.response;
  } else {
    console.log("Error when retrieving localstorage");
  }
}
Load_Data();
displayData(Database.data);
