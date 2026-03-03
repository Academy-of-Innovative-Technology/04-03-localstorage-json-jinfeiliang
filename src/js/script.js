var Database = {
  keyName: "Mutant Database",
  data: [],
};

let Personal_Information_List_DOM = document.querySelector(
  "#Personal_Information_List",
);

let Powers_Information_List_DOM = document.querySelector(
  "#Powers_Information_List",
);

let Affiliation_Information_List = document.querySelector(
  "#Affiliation_Information_List",
);

function displayData(dataArray) {
  dataArray.forEach((Character) => {
    console.log(Character);
    let Personal_Info_List = Object.entries(Character.profile).forEach(
      ([key, value]) => {
        console.log("Key:", key);
        console.log("Value:", value);
      },
    );
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
