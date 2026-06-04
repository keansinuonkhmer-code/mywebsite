const cars = [
  {
    name: "BMW M4",
    price: "$70,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    desc: "Luxury sports car with strong engine."
  },
  {
    name: "Toyota Camry",
    price: "$25,000",
    image: "https://th.bing.com/th/id/OIP.yhym-S3Rp1nGXKMXWiQ5qgHaE8?w=208&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    desc: "Reliable and comfortable sedan."
  },
  {
    name: "Ford Mustang",
    price: "$55,000",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    desc: "Classic American muscle car."
  },
  {
    name: "Honda Civic",
    price: "$22,000",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    desc: "Compact car known for reliability."
  },
  {
    name: "Audi A4",
    price: "$40,000",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    desc: "Luxury sedan with advanced technology."
  },
  {
    name: "Toyota Highlander Prado 2024",
    price: "$35,000",
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/11/2024-toyota-grand-highlander.jpg",
    desc: "A spacious and capable SUV for all terrains."
  },
  {
    name: "Toyota RAV4 GR Sport 2024",
    price: "$30,000",
    image: "https://www.tuningblog.eu/wp-content/uploads/2023/10/Toyota-RAV4-GR-Sport-2024-Tuning-SUV-3.jpg",
    desc: "Sporty version of the popular RAV4 SUV."
  },
  {
    name: "Toyota Prius (2024)",
    price: "$28,000",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkwnboKcKRGmDKNI4YHc0KP4W-VO2EVxLZddgw0YzPrbowM87QRN56bsAum-rxafxRHj3T1xtO1KY8nJ--Dgwj3vAM_xO7JIzlmhJlzvLdsTuhiXJYedQyHCuiVHEnBEyMobW8mFypdJCWXnBX2rLNJgYr_kV7YU6pmCk3T8ORiOcgvKG71mvTKFaY/s2560/Toyota-Prius-2024-PHEV%20(4).jpg",
    desc: "A fuel-efficient hybrid sedan."
  },
  {
    name: "Bmw Car Hd 100+] 1920x1080 Bmw",
    price: "$60,000",
    image: "https://www.motortrend.com/uploads/2023/09/002-2024-BMW-i5-front-three-quarters-in-action.jpg",
    desc: "A high-performance electric sedan from BMW."
  },
  {
    name: "Acura Cars",
    price: "$45,000",
    image: "https://images.autotrader.com/resize/1200x630/ps-vehicle-media/a57fc397-3976-4339-87e0-844f04acb0ef.JPG",
    desc: "Luxury vehicles from Acura with advanced features."
  },
  {
    name: "2025 Alfa Romeo Stelvio",
    price: "$50,000",
    image: "https://www.clubalfa.it/en/assets/media/2024/03/New-Alfa-Romeo-Stelvio-render-1-1.jpg",
    desc: "A stylish and sporty SUV from Alfa Romeo."
  },
  {
    name: "Alpine A110 R Review (2023) | Autocar",
    price: "$70,000",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/alpine-a110r-first-drive-2023-01-front-tracking.jpg",
    desc: "A lightweight sports car with excellent handling."
  },
  {
    name: "2024 Aston Martin DBX Review",
    price: "$180,000",
    image: "https://www.motortrend.com/uploads/2024/02/2025-Aston-Martin-Vantage-V-8-12.png?w=768&width=768&q=75&format=webp",
    desc: "A luxurious and powerful SUV from Aston Martin."
  },
  {
    name: "Modelos Audi 2024",
    price: "$40,000",
    image: "https://www.motortrend.com/uploads/2022/12/2024-audi-q8-etron-drive-motion-lead-image.jpg",
    desc: "A range of vehicles from Audi with cutting-edge technology."
  },
  {
    name: "New Bentley Flying Spur Speed debuts with 782hp hybrid V8",
    price: "$300,000",
    image: "https://www.motoringresearch.com/wp-content/uploads/2024/09/001-Bentley-Flying-Spur-Speed-Hybrid.jpg",
    desc: "A luxurious and powerful SUV from Bentley."
  },
  {
    name: "Borgward Isabella: sports car concept, electric SUV reality | CAR Magazine",
    price: "$35,000",
    image: "https://car-images.bauersecure.com/pagefiles/76172/14-borgward-suv.jpg",
    desc: "A lightweight sports car with excellent handling."
  },
  {
    name: "Bugatti | CarBuzz",
    price: "$2,000,000",
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/06/embargo-bugatti-world-premiere-presskit-images-26-1.jpg",
    desc: "A high-performance hypercar from Bugatti."
  },
  {
    name: "Bugatti Revealed Two More Bespoke Sur Mesure Creations Inspired By ...",
    price: "$2,500,000",  
    image: "https://www.supercars.net/blog/wp-content/uploads/2022/04/05_bugatti_vagues-de-lumiere-scaled-1-2048x1366.jpg",
    desc: "Two more bespoke creations from Bugatti."
  },
  {
    name: "Cool Cars 2019 Bugatti Chiron",
    price: "$3,000,000",
    image: "https://i.pinimg.com/originals/0a/4e/6c/0a4e6cde88340556ec6cc44a118bff92.jpg",
    desc: "A high-performance hypercar from Bugatti."
  },
  {
    name: "Dealer Sells Low-Mileage Bugatti Chiron for Under MSRP, Are Hypercars ...",
    price: "$2,800,000",
    image: "https://s1.cdn.autoevolution.com/images/news/gallery/dealer-sells-low-mileage-bugatti-chiron-for-under-msrp-are-hypercars-getting-cheaper-too_20.jpg",
    desc: "A low-mileage Bugatti Chiron being sold for under MSRP."
  },

  {
    name: "BMW i8 Review 2026 | Top Gear",
    price: "$150,000",
    image: "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/04/p90301922_highres.jpg",
    desc: "A futuristic hybrid sports car from BMW."
  },
  {
    name: "Bmw I8 2020 Black",
    price: "$140,000",
    image: "https://wheelsboutique.com/wp-content/uploads/2018/09/bmw-i8-on-hre-p101-black-out_24504350070_o-1.jpg",
    desc: "A sleek and stylish hybrid sports car from BMW."
  },
  {
    name: "2017 BMW i8 | Consumer Guide Auto",
    price: "$120,000",
    image: "https://consumerguide.com/wp-content/uploads/2018/07/screen-shot-2018-07-11-at-5.18.30-pm.png",
    desc: "A classic hybrid sports car from BMW."
  },
  {
    name: "400-Mile 2014 BMW i8 for sale",
    price: "$100,000",
    image: "https://bringatrailer.com/wp-content/uploads/2019/03/2014_bmw_i8_1554913023b59d599d0e53ecfi8-21.jpg?fit=2048%2C1365",
    desc: "A low-mileage BMW i8 available for sale."
  },
  {
    name: "900+ Car design ideas in 2025 | car design, concept cars, car design sketch",
    price: "$80,000",
    image: "https://i.pinimg.com/originals/e3/7b/00/e37b0059d9b879081b1571e2e5168940.jpg",
    desc: "A collection of car design ideas for 2025."
  },
  {
    name: "Polestar Precept 2023",
    price: "$60,000",
    image: "https://i.pinimg.com/originals/9d/b3/48/9db348d21bf25a7e179e23c287f84e88.jpg",
    desc: "A futuristic electric SUV from Polestar."
  },
  {
    name: "BAIC X55 coming to Malaysia; here’s what to expect",
    price: "$25,000",
    image: "https://imgcdnblog.carbay.com/wp-content/uploads/2024/06/12153914/Untitled-design-792.jpg",
    desc: "The upcoming BAIC X55 will be available in Malaysia with modern features."
  },
  {
    name: "Beijing X55 To Be Built In SA in 2023",
    price: "$25,000",
    image: "https://img-ik.cars.co.za/news-site-za/images/2022/11/AR1O2512b_1800x1800.jpg",
    desc: "The Beijing X55 will be built in South Africa in 2023."
  },
  {
    name: "Xiaomi SU7",
    price: "$30,000",
    image: "https://c.ndtvimg.com/2024-01/iurrot38_xiaomi-su7-ev_625x300_05_January_24.jpg?downsize=950:*",
    desc: "Xiaomi's first electric vehicle, the SU7, offers a blend of technology and performance."
  },
  {
    name: "BMW 7 Series",
    price: "$90,000",
    image: "https://i.ytimg.com/vi/lJYe-94wC48/sddefault.jpg",
    desc: "A luxurious sedan from BMW with advanced features."
  },
  {
    name: "2025 Ford Ranger review | CarExpert",
    price: "$35,000",
    image: "https://static.thairath.co.th/media/Dtbezn3nNUxytg04aYkeYCxUwJrsr5Unwm9P8gos9GX1D4.png",
    desc: "The 2025 Ford Ranger offers a powerful and versatile pickup truck experience."
  },
  {
    name: "2025 Toyota RAV4 review | CarExpert",
    price: "$30,000",
    image: "https://www.motortrend.com/files/67085deec30a8c000841b88a/1-2025-toyota-rav4-front-view.jpg",
    desc: "The 2025 Toyota RAV4 continues to impress with its reliability and hybrid options."
  },
];
let cart = [];
const cartFromStorage = localStorage.getItem("cartCars");

if (cartFromStorage) {
  cart = JSON.parse(cartFromStorage);
}
let saved = [];
let currentFilter = "all";
const savedFromStorage = localStorage.getItem("savedCars");
if (savedFromStorage) {
  saved = JSON.parse(savedFromStorage);
}
const grid = document.getElementById("carGrid");
const modal = document.getElementById("detailModal");
const closeBtn = document.getElementById("closeBtn");


const detailImage = document.getElementById("detailImage");
const detailName = document.getElementById("detailName");
const detailPrice = document.getElementById("detailPrice");
const detailDesc = document.getElementById("detailDesc");
function showCars(carList) {
  grid.innerHTML = "";

  carList.forEach((car) => {
    const index = cars.indexOf(car);
    const isSaved = saved.some(item => item.name === car.name);
    grid.innerHTML += `
      <div class="car-card">
        <img src="${car.image}" onclick="openDetail(${index})" />
        <div class="car-info">
          <h3>${car.name}</h3>
          <p>${car.price}</p>
          <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="saveCar(${index})">${isSaved ? '❤️ Saved' : '🤍 Save'}</button>
        </div>
      </div>
    `;
  });
}

// Add to Cart
function openDetail(index) {
  const car = cars[index];

  detailImage.src = car.image;
  detailName.innerText = car.name;
  detailPrice.innerText = car.price;
  detailDesc.innerText = car.desc;

  const addBtn = document.querySelector(".add-cart");

  addBtn.onclick = () => {
    cart.push(car);
    updateCart();
    alert("Added to cart!");
  };

  modal.style.display = "flex";
}

// open / close Cart
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Cart Logic New variables
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const savedBtn = document.getElementById("savedBtn");
const savedPanel = document.getElementById("savedPanel");
const closeSaved = document.getElementById("closeSaved");
const savedItems = document.getElementById("savedItems");

savedBtn.onclick = () => {
  savedPanel.style.display = "flex";
  updateSaved();
};
// About button - smooth scroll to About section
const aboutBtn = document.getElementById("aboutBtn");
if (aboutBtn) {
  aboutBtn.onclick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("aboutSection not found");
    }
  };
}

// Deals button - បើកទំព័រ deals.html
const dealsBtn = document.getElementById("dealsBtn");
if (dealsBtn) {
  dealsBtn.onclick = () => {
    window.location.href = "deals.html";
  };
}

closeSaved.onclick = () => {
  savedPanel.style.display = "none";
};

function updateSaved() {
  savedItems.innerHTML = "";

  if (saved.length === 0) {
    savedItems.innerHTML = "<p>No saved cars yet.</p>";
    return;
  }

  saved.forEach((car, index) => {
    savedItems.innerHTML += `
      <div class="cart-item">
        <img src="${car.image}" />
        <div>
          <h4>${car.name}</h4>
          <p>${car.price}</p>
          <button class="remove-btn" onclick="removeSaved(${index})">Remove</button>
        </div>
      </div>
    `;
  });
}

function removeSaved(index) {
  saved.splice(index, 1);
  updateSaved();
}
searchInput.addEventListener("keyup", applySearchAndFilter);
cartBtn.onclick = () => {cartPanel.style.display = "flex";
};
closeCart.onclick = () => {  cartPanel.style.display = "none";
};

cartBtn.onclick = () => {
  cartPanel.style.display = "flex";
};

closeCart.onclick = () => {
  cartPanel.style.display = "none";
};

//Update Cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const priceNumber = Number(item.price.replace("$", "").replace(",", ""));
    total += priceNumber;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" />
        <div>
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  cartTotal.innerText = "Total: $" + total.toLocaleString();
  cartCount.innerText = cart.length;
  localStorage.setItem("cartCars", JSON.stringify(cart));
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartCars", JSON.stringify(cart));
  updateCart();
  updateCartCount();
}

function saveCar(index) {
  const car = cars[index];

  const exists = saved.find(item => item.name === car.name);

  if (exists) {
    saved = saved.filter(item => item.name !== car.name);
  } else {
    saved.push(car);
    // animation
    setTimeout(() => {
      const button = document.querySelectorAll(".save-btn"); 
      button.forEach(btn => { btn.classList.remove("animate"); });
    }, 300);
  }
    localStorage.setItem("savedCars", JSON.stringify(saved));
    updateSaved();
    showCars(cars);
}

function filterCars(type){
  currentFilter = type;

  document.getElementById("btnAll").classList.remove("active");
  document.getElementById("btnCheap").classList.remove("active");
  document.getElementById("btnExpensive").classList.remove("active");

  if (type === "all") {
    document.getElementById("btnAll").classList.add("active");
  } 
  else if (type === "cheap") {
    document.getElementById("btnCheap").classList.add("active");
  } 
  else if (type === "expensive") {
    document.getElementById("btnExpensive").classList.add("active");
  }

  applySearchAndFilter();
}
function applySearchAndFilter() {
  const searchValue = searchInput.value.toLowerCase();

  let result = cars.filter(car =>
    car.name.toLowerCase().includes(searchValue)
  );

  if (currentFilter === "cheap") {
    result = result.filter(car => {
      const price = Number(car.price.replace("$", "").replace(",", ""));
      return price < 30000;
    });
  }

  if (currentFilter === "expensive") {
    result = result.filter(car => {
      const price = Number(car.price.replace("$", "").replace(",", ""));
      return price >= 30000;
    });
  }

  showCars(result);
}
filterCars("all");
const darkBtn = document.getElementById("darkBtn");
darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    darkBtn.innerText = "☀️ Light";
  } else {
    darkBtn.innerText = "🌙 Dark";
  }
};
function goToDetail(index) {
  const car = cars[index];
  localStorage.setItem("selectedCar", JSON.stringify(car));
  window.location.href = "detail.html";
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cartCars")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cartCars")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");

chatBtn.onclick = () => {
  chatBox.style.display =
    chatBox.style.display === "block"
      ? "none"
      : "block";
};

function sendMessage() {

  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");

  let text = input.value.trim();

  if(text === "") return;

  body.innerHTML += `
    <div class="user-msg">${text}</div>
  `;

  let reply = "Sorry, I don't understand.";

  if(text.toLowerCase().includes("hello")){
    reply = "Hello! Welcome to ShopCar 🚗";
  }
  else if(text.toLowerCase().includes("price")){
    reply = "Please click a car to see its price.";
  }
  else if(text.toLowerCase().includes("contact")){
    reply = "You can contact seller via Telegram.";
  }
  else if(text.toLowerCase().includes("car")){
    reply = "We have many cars available.";
  }
  else if(text.toLowerCase().includes("help")){
    reply = "How can I assist you?";
  }
  else if(text.toLowerCase().includes("thanks")){
    reply = "You're welcome!";
  }
  else if(text.toLowerCase().includes("bye")){
    reply = "Goodbye! Have a nice day!";
  }
  else if(text.toLowerCase().includes("deals")){
    reply = "Check out our latest deals on the Deals page!";
  }
  else if(text.toLowerCase().includes("about")){
    reply = "ShopCar is your one-stop destination for buying and selling cars online. We offer a wide selection of vehicles, from affordable sedans to luxury sports cars. Our platform is designed to make the car buying process easy and convenient for everyone.";
  }
  else if(text.toLowerCase().includes("saved")){
    reply = "You can view your saved cars by clicking the Saved button.";
  }
  else if(text.toLowerCase().includes("cart")){
    reply = "You can view your cart by clicking the Cart button.";
  }
  else if(text.toLowerCase().includes("search")){
    reply = "You can search for cars using the search bar at the top.";
  }
  else if(text.toLowerCase().includes("filter")){
    reply = "You can filter cars by price using the buttons above the search bar.";
  }
  else if(text.toLowerCase().includes("bmw")){
    reply = "BMW is a German luxury car manufacturer known for its performance and style.";
  }
  else if(text.toLowerCase().includes("toyota")){
    reply = "Toyota is a Japanese car manufacturer known for its reliability and affordability.";
  }
  else if(text.toLowerCase().includes("ford")){
    reply = "Ford is an American car manufacturer known for its trucks and muscle cars.";
  }
  else if(text.toLowerCase().includes("audi")){
    reply = "Audi is a German luxury car manufacturer known for its technology and design.";
  }
  else if(text.toLowerCase().includes("prado")){
    reply = "The Toyota Highlander Prado 2024 is a spacious and capable SUV for all terrains.";
  }
  else if(text.toLowerCase().includes("rav4")){
    reply = "The Toyota RAV4 GR Sport 2024 is a sporty version of the popular RAV4 SUV.";
  }
  else if(text.toLowerCase().includes("prius")){
    reply = "The Toyota Prius (2024) is a fuel-efficient hybrid sedan.";
  }
  else if(text.toLowerCase().includes("i8")){
    reply = "The BMW i8 is a futuristic hybrid sports car from BMW.";
  }
  else if(text.toLowerCase().includes("cheap")){
    reply = "You can filter cars under $30,000 by clicking the Cheap button.";
  }
  else if(text.toLowerCase().includes("expensive")){
    reply = "You can filter cars $30,000 and above by clicking the Expensive button.";
  }
  else if(text.toLowerCase().includes("save")){
    reply = "You can save a car by clicking the heart icon on the car card.";
  }

  body.innerHTML += `
    <div class="bot-msg">${reply}</div>
  `;

  input.value = "";

  body.scrollTop = body.scrollHeight;
}