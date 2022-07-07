function call() {
  for(let i = 0; i < 5; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}


call()


function getOnlyUpperCase(txt) {
  let res = txt.split('')
  res.forEach(item =>{
    if(item.match(/[A-Z]/)){
      console.log(item);
    }
  })
}



getOnlyUpperCase("Hello WoRLD!!!")


let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')
let output = document.querySelector('.main-output')

let box = output.innerText;
let empty;

startBtn.addEventListener('click', () =>{
  empty = setInterval(increase, 1000)
})

function increase(){
  box = +(box += 1)
  output.innerText = box
}

stopBtn.addEventListener('click', () =>{
  clearInterval(empty)
})

resetBtn.addEventListener('click', () =>{
  box = 0
  output.innerText = 0
})  



let array = [
  "item1", 
  "item2", 
  "item3", 
  "item4", 
  "item5", 
  'item6', 
  "item7", 
  "item8", 
  "item9", 
  "item10", 
  "item11", 
  "item12", 
  "item13", 
  "item14", 
  "item15", 
  "item16", 
  "item17", 
  "item18", 
  "item19", 
  "item20", 
  "item21", 
  "item22", 
  "item23", 
  "item24", 
  "item25", 
  "item26"
];



let lists = document.querySelector('.lists');
let pagination = document.querySelector(".paginate-list");
let page = 1;


function paginate(array, page, count){
  lists.innerHTML = "";

  for(let i = (page - 1) * count; i < count * page; i++){
    if(array[i] !== undefined){
      let cards = document.createElement("li");
      cards.className = "cards";
      cards.innerText = array[i];
      lists.appendChild(cards);
    }
  }
}


for(let i = 1; i < array.length / 5; i++){
  let button = document.createElement("button");
  button.className = "paginate-btn";
  button.innerText = i;
  pagination.appendChild(button);
}

const paginateBtn = document.querySelectorAll(".paginate-btn");

paginateBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    page = index + 1;
    paginate(array, page, 5);
  })
});

paginate(array, page, 5);





