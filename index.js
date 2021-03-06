function call() {
  for(let i = 0; i < 5; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
call()


// EXERCIE 0


function getOnlyUpperCase(txt) {
  let res = txt.split('')
  let count = 0
  res.forEach(item =>{
    if(item.match(/[A-Z]/)){
      count++
      console.log(item);
    }
  })
  console.log(`Count: ${count}`);
}

getOnlyUpperCase("Hello WoRLD!!!")


// EXERCIE 1


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


// EXERCIE 2

let submitBtn = document.querySelector('.submit-btn')
let answer1 = document.getElementById('true1')
let answer2 = document.getElementById('true2')
let answer3 = document.getElementById('true3')
let answer4 = document.getElementById('true4')
let time1 = document.querySelector('.time1')
let input1 = document.querySelectorAll('.input1')

let timeBox = time1.innerText
time1.innerText = 60
let wrapper;


wrapper = setInterval(decrease, 1000)


function decrease(){
  time1.innerText -= 1

  if(time1.innerText == 0){
    clearInterval(wrapper)
    alert('Time is out')
  }
}

submitBtn.addEventListener('click', () =>{
  let result = 0;

  if(answer1.checked){
    result++
  }

  if(answer2.checked){
    result++
  }

  if(answer3.checked){
    result++
  }

  if(answer4.checked){
    result++
  }

  alert(`Your score is ${result}`)
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

paginate(array, page, 5);



// EXERCISE 4 

function findMaxNum(arr){
  let res = []
  arr.forEach(item =>{
    if(Number(item)){
      res.push(item)
    }
  })
  return Math.max(...res)
}

console.log(findMaxNum([22,false, true, 'String', 11,55,1,53,1,3,422,6, undefined]));


