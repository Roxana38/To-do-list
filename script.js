//--------------Change button class and innerText---------------

function NewButtonFunction(){
let btn = document.querySelectorAll(".toggleStatus")
 for(let i = 0; i<btn.length;i++) {
  btn[i].addEventListener('click', (e) => {

    console.log(document.querySelectorAll(".toggleStatus"))
    
    checkStatus(e)
    changeStatus(e)
  })
};
}
function checkStatus(e) {
  const cl = e.target.parentNode.classList;
  if (cl.contains("done")) {
    cl.remove("done");
  } else {
    cl.add("done");
  }
}
function changeStatus(e) {
    if (e.target.innerText=='not done'){
        e.target.innerText='done';
    } else {
        e.target.innerText='not done';
    }
}
//----------------Add a new item to the list------------------

function addItem(){
    let newItem=document.getElementById('new').value
    if(newItem){
        let allItems=document.getElementById('list')
        allItems.innerHTML+=`
        <div>
            <span>${newItem}</span>
            <button class="toggleStatus">done</button>
        </div>
        `
      return NewButtonFunction()  
    };
}
document.getElementById("addButton").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.getElementById("new");
    let text = input.value.trim();
    addItem(text);
    input.value = "";
});

//---------------------First two item-------------------------

let btn = document.querySelectorAll(".toggleStatus")
 for(let i = 0; i<btn.length;i++) {
  btn[i].addEventListener('click', (e) => {

    console.log(document.querySelectorAll(".toggleStatus"))
    
    checkStatus(e)
    changeStatus(e)
  })
};

//----------------------Complete all-------------------------

const complete = document.getElementById("mark");
complete.addEventListener("click", (e) => {
  ButtonTXt(e)
  checkAll(e);
  changeTXT(e);
});

  function ButtonTXt(e) {
    if (complete.innerText=='Complete all'){
        complete.innerText='Uncomplete';
    } else {
        complete.innerText='Complete all';
    }
  }
  function checkAll(e) {
    
    const cl = document.querySelectorAll('.toggleStatus')
    for(let i = 0; i<cl.length;i++) {
      const fat = cl[i].parentNode;
      if (complete.innerText=='Uncomplete') {
        fat.classList.add("done")
      } else if (complete.innerText=='Complete all') {
        fat.classList.remove("done")
      }
    }
  }  
  function changeTXT(e) {
    const bttn = document.querySelectorAll('.toggleStatus')
    for(let i = 0; i<bttn.length;i++) {
      const bttnn = bttn[i];
      if (complete.innerText=='Uncomplete'){
        bttnn.innerHTML ='not done';
      } else if (complete.innerText=='Complete all'){
        bttnn.innerHTML ='done';
      }
    }
  }
  
//---------------------------Filter-----------------------------
let filterinput = document.getElementById("filterBox");
filterinput.addEventListener("keyup", filterNames);

function filterNames() {
  const filterValue = document.getElementById("filterBox").value.toUpperCase();
  let divlist = document.body.children[2];
  let div = divlist.getElementsByTagName("div");

  for (let i = 0; i < div.length; i++) {
    let a = div[i].getElementsByTagName("span")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}