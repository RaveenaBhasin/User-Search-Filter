let users = {
  data: [
    {
      userName: "Vania Lawrence",
      category: "Frontend",
      role: "Frontend Developer",
      image: "images/user1.jpg",
    },
    {
      userName: "Kemp Woodward",
      category: "Backend",
      role: "Backend Developer",
      image: "images/user2.jpg",
    },
    {
      userName: "Maynard Benson",
      category: "FullStack",
      role: "FullStack Developer",
      image: "images/user3.jpg",
    },
    {
      userName: "Ged Fitzgerald",
      category: "Product",
      role: "Product Manager",
      image: "images/user4.jpg",
    },
    {
      userName: "Scout Jordan",
      category: "Frontend",
      role: "Frontend Developer",
      image: "images/user5.jpg",
    },
    {
      userName: "Brian Powers",
      category: "Backend",
      role: "Backend Developer",
      image: "images/user6.jpg",
    },
    {
      userName: "Rita Hanson",
      category: "FullStack",
      role: "Fullstack Developer",
      image: "images/user7.jpg",
    },
    {
      userName: "Rita Ward",
      category: "Product",
      role: "Product Manager",
      image: "images/user1.jpg",
    },
  ],
};

for (let i of users.data) {
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  
  let container = document.createElement("div");
  container.classList.add("container");
  //user name
  let name = document.createElement("h4");
  name.classList.add("user-name");
  name.innerText = i.userName.toUpperCase();
  container.appendChild(name);
  //role
  let role = document.createElement("h5");
  role.innerText =  i.role;
  container.appendChild(role);

  card.appendChild(container);
  document.getElementById("users").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterUser(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase() || button.innerText.includes(value)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      //if category matches, display card
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".user-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //if element contains search input
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all users
window.onload = () => {
  filterUser("All");
};
