class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Submit");
    this.greeting = createElement("h2");
    this.name = null;
    this.para = createElement("h5");
  }

  display(dname) {
    var title = createElement("h2");
    title.html("Database Example");
    title.position(400, 150);
    this.input.position(450, 250);
    this.button.position(450, 300);

    this.button.mousePressed(() => {
      this.name = this.input.value();
      this.greeting.html("Hello " + this.name);
      this.greeting.position(500, 400);
    });
  }
  displaydataval(dname) {
    this.para.html("Database value : " + dname);
    this.para.position(500, 500);
  }
}
