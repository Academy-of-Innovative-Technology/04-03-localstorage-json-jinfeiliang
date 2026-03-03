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

let Color_Classes = ["bg-primary", "bg-primary-subtle", "bg-success", "bg-danger", "bg-warning", "bg-info"];

function randomColor() {
  let Random = Math.floor(Math.random() * (Color_Classes.length - 1));
  return Color_Classes[Random];
}

function displayData(dataArray) {
  Mutants_Container.innerHTML = "";
  dataArray.forEach((Character) => {
    console.log(Character);

    let Personal_Info_LI = "";
    Object.entries(Character.profile).forEach(
      ([key, value]) => {
        let HTML = `<li><span class="fw-bold text-capitalize">${key}:</span> ${value}</li>`;
        Personal_Info_LI += HTML;
      },
    );

    let Powers_Info_LI = "";
    Character.powers.forEach( (power) => {
      let HTML = `<li>${power}</li>`;
        Powers_Info_LI += HTML;
    })

    let Affiliation_Info_LI = "";
    Character.affiliation.forEach( (affiliation) => {
      let HTML = `<li class="list-inline-item badge bg-primary ${randomColor()}">${affiliation}</li>`;
        Affiliation_Info_LI += HTML;
    })
    

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
            ${Powers_Info_LI}
          </ul>

          <h6 class="fw-bold">Affiliation</h6>
          <ul id="Affiliation_Information_List" class="list-inline">
            ${Affiliation_Info_LI}
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
