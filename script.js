let users = []; // Store users
let currentUser = null;

// Sample Products
const products = [
  {name:"iPhone 14", code:"P001", price:900, img:"https://via.placeholder.com/150"},
  {name:"Laptop", code:"P002", price:1200, img:"https://via.placeholder.com/150"},
  {name:"Headphone", code:"P003", price:100, img:"https://via.placeholder.com/150"},
  {name:"Camera", code:"P004", price:500, img:"https://via.placeholder.com/150"},
  {name:"Smart Watch", code:"P005", price:200, img:"https://via.placeholder.com/150"},
  {name:"Tablet", code:"P006", price:400, img:"https://via.placeholder.com/150"}
];

function register(){
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  if(name && phone && password){
    const exist = users.find(u=>u.phone===phone);
    if(exist){
      document.getElementById('loginError').innerText = "Phone already registered!";
    } else{
      users.push({name, phone, password});
      document.getElementById('loginError').innerText = "Registered! You can login now.";
    }
  } else{
    document.getElementById('loginError').innerText = "Please fill all fields!";
  }
}

function login(){
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  const user = users.find(u=>u.phone===phone && u.password===password);
  if(user){
    currentUser = user;
    document.getElementById('loginForm').style.display = "none";
    showProducts();
  } else{
    document.getElementById('loginError').innerText = "Incorrect login!";
  }
}

function showProducts(){
  const container = document.getElementById('productPage');
  container.style.display="flex";
  container.innerHTML = "";
  products.forEach(p=>{
    const div = document.createElement('div');
    div.className = "product";
    div.innerHTML = <img src="${p.img}"><h3>${p.name}</h3><p>Code: ${p.code}</p><p>Price: $${p.price}</p><button>Buy</button>;
    container.appendChild(div);
  });
}