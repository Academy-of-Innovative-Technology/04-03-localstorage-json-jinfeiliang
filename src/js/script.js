var Database = {
  keyName: "Mutant Database",
  data: [],
};


async function Get_Data_From_Localstorage() {
  try {
    const response = await fetch("api.json");
    if (!response.ok) {
      throw new Error(`Reponse status: ${response.status}`);
    }

    const result = await response.json();
    Database.data = result.response;
	console.log(Database);
    //return result;
  } catch (error) {
    console.log(error.message);
  }
}

async function loadDataSource() {}

function displayData(dataArray) {
  console.log(dataArray);
}

function Save_Data() {
	if (Database.data != [] && Database.data != "" && Database.data != "") {
		let Formatted = {"response": Database.data}
		localStorage.setItem(Database.keyName, JSON.stringify(Formatted))
	}
}

function Load_Data() {
  let Data = JSON.parse(localStorage.getItem(Database.keyName));
  if (Data != [] && Data != undefined && Data != "") {
    Database.data = Data;
  } else {
    Get_Data_From_Localstorage().then(() => {
      loadDataSource();
	  console.log(Database.data);
    });
  }
}
Load_Data();
