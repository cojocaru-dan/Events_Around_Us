const meButton = `<button id="me">Click me!</button>`;

const greetings = [`Hi`, `Hello`, `Ciao`, `Arrivederci`];

const loadEvent = function() {

  // Write your JavaScript code after this line
  // 1
  const meButton = "<button id='clickbutton'>Click Button</button>";
  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentHTML("beforeend", meButton);

  const myClickButton = document.querySelector("#clickbutton");
  myClickButton.addEventListener("click", function() {
    console.log('myClickButton was clicked!');
  });
  
  // 2
  const newButton1 = "<button id='1'>Click Button 1</button>";
  const newButton2 = "<button id='2'>Click Button 2</button>";
  const newButton3 = "<button id='3'>Click Button 3</button>";
  const newButton4 = "<button id='4'>Click Button 4</button>";

  const buttonsArr = [newButton1, newButton2, newButton3, newButton4];
  for (const button of buttonsArr) {
    rootElement.insertAdjacentHTML("beforeend", button);
  }

  greetings.forEach(function(greeting, index) {
    const currentButton = document.getElementById(index + 1);
    currentButton.addEventListener("click", function() {
      console.log(greeting);
    })
  });

  // 3
  const whereButton = "<button id='where'>Where am I?</button>";
  rootElement.insertAdjacentHTML("beforeend", whereButton);
  const whereBtn = rootElement.querySelector("#where");
  whereBtn.addEventListener("click", function(event) {
    console.log(event.composedPath());
  });

  // 4
  const allButtons = document.querySelectorAll("button");
  for (const btn of allButtons) {
    btn.addEventListener("click", function(event) {
      console.log(event.target.textContent);
    })
  }

  // 5
  const inputElement = "<input id='input' type='text'>";
  rootElement.insertAdjacentHTML("beforeend", inputElement);
  const inputElem = document.getElementById('input');

  inputElem.addEventListener("input", function(event) {
    console.log(event.target.value);
  })

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
