var name, database;

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  form = new Form();
  var databasename;
  var nameref = database.ref("name");
  nameref.on("value", readfromDatabase, showerror);
}

function draw() {
  background("white");
  writeinDatabase(form.name);
  displaydataval();
  // console.log(databasename);
  form.display();
  form.displaydataval(databasename);
}

function writeinDatabase(name) {
  database.ref("/").set({
    name: name,
  });
}

function readfromDatabase(data) {
  name = data.val();
}
function showerror() {
  console.log("ERROR");
}
function displaydataval() {
  databasename = database.ref("name");
  databasename.on("value", (data) => {
    databasename = data.val();
  });
}
