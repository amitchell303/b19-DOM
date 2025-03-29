// this code will produce random whole profiles of various freelancers
// please work lol

const results = [
  {
    id: 1,
    name: "The Wizard",
    occu: "Wizardry",
    price: "100",
    image: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
    url: "https://stardewvalleywiki.com/Wizard",
  },
  {
    id: 2,
    name: "Demetrius",
    occu: "Biologist",
    price: "80",
    image: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
    url: "https://stardewvalleywiki.com/Demetrius",
  },
  {
    id: 3,
    name: "Emily",
    occu: "Yoga Instructor",
    price: "60",
    image: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
    url: "https://stardewvalleywiki.com/Emily",
  },
  {
    id: 4,
    name: "Robin",
    occu: "Carpenter",
    price: "80",
    image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
    url: "https://stardewvalleywiki.com/Robin",
  },
  {
    id: 5,
    name: "Penny",
    occu: "Teacher",
    price: "50",
    image: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    url: "https://stardewvalleywiki.com/Penny",
  },
  {
    id: 6,
    name: "Harvey",
    occu: "Doctor",
    price: "90",
    image: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
    url: "https://stardewvalleywiki.com/Harvey",
  },
  {
    id: 7,
    name: "Leah",
    occu: "Artist",
    price: "40",
    image: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
    url: "https://stardewvalleywiki.com/Leah",
  },
  {
    id: 8,
    name: "Willy",
    occu: "Fisherman",
    price: "40",
    image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
    url: "https://stardewvalleywiki.com/Willy",
  },
  {
    id: 9,
    name: "Clint",
    occu: "Blacksmith",
    price: "50",
    image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    url: "https://stardewvalleywiki.com/Clint",
  },
];

const maxResults = 9;
const body = document.querySelector("body");
const section = document.createElement("section");
section.style.display = "flex";
section.style.flexWrap = "wrap";

const addToDisplay = (person) => {
  const div = document.createElement("div");
  div.style.display = "grid";
  div.style.margin = "20px";
  const h2 = document.createElement("h2");
  h2.textContent = person.name;
  const img = document.createElement("img");
  img.src = person.image;
  img.style.height = "200px";
  const h3 = document.createElement("h3");
  h3.textContent = person.occu;
  const p = document.createElement("p");
  p.textContent = person.price;
  const a = document.createElement("a");
  a.href = person.url;
  a.textContent = `Learn more about ${person.name}`;
  a.target = "_blank";
  div.append(h2);
  div.append(img);
  div.append(h3);
  div.append(p);
  div.append(a);
  section.append(div);
};

// function render() {
//     const squareList = document.querySelector("#squares");
//     const squareElements = shapes.map((shape) => {
//       const squareElement = document.createElement("li");
//       squareElement.classList.add(shape.color, shape.size);
//       return squareElement;
//     });
//     squareList.replaceChildren(...squareElements);

//     const circleList = document.querySelector("#circles");
//     const circleElements = shapes.map((shape) => {
//       const circleElement = document.createElement("li");
//       circleElement.classList.add(shape.color, shape.size);
//       return circleElement;
//     });
//     circleList.replaceChildren(...circleElements);
//   }

const displayNewUser = () => {
  const randomUser = Math.floor(Math.random() * 10);
  addToDisplay(results[randomUser]);
};

function main() {
  for (let i = 0; i < results.length; i++) {
    addToDisplay(results[i]);
  }
  body.append(section);
}

main();

const addPersonInterval = setInterval(() => {
  displayNewUser();
  render();
  if (results.length == maxResults) {
    clearInterval(addPersonInterval);
  }
}, 2000);

render();
