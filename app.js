function sayHello(name, age) {
  console.log("Hello " + name + " Your age is " + age);
}

const player = {
  name: "Changmin",
  sayHello2: function () {
    console.log("Hello " + player.name);
  },
};
player.sayHello2();
