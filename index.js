//Pseudocode
// please work lol
// Define Consts
//   names
//   occupations
//   starting prices
// Render
// setinterval
// display avg starting price, update with new appearance
//

// const profile = [
//   { id: 1, name: "The Wizard", occupation: "Wizardry", price: 100, image: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png" },
//   { id: 2, name: "Demetrius", occupation: "Biologist", price: 80, image: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png" },
//   { id: 3, name: "Emily", occupation: "Yoga Instructor", price: 60, image: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png" },
//   { id: 4, name: "Robin", occupation: "Carpenter", price: 80, image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png" },
//   { id: 5, name: "Penny", occupation: "Teacher", price: 50, image: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png" },
//   { id: 6, name: "Harvey", occupation: "Doctor", price: 90, image: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png" },
//   { id: 7, name: "Leah", occupation: "Artist", price: 40, image: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png" },
//   { id: 8, name: "Willy", occupation: "Fisherman", price: 40, image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png" },
//   { id: 9, name: "Clint", occupation: "Blacksmith", price: 50, image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png" },
// ];

const profile = [
    {
      id: 1,
      name: "The Wizard",
      occupation: "Wizardry",
      price: 100,
      image: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
    },
    {
      id: 2,
      name: "Demetrius",
      occupation: "Biologist",
      price: 80,
      image: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
    },
    {
      id: 3,
      name: "Emily",
      occupation: "Yoga Instructor",
      price: 60,
      image: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
    },
    {
      id: 4,
      name: "Robin",
      occupation: "Carpenter",
      price: 80,
      image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
    },
    {
      id: 5,
      name: "Penny",
      occupation: "Teacher",
      price: 50,
      image: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    },
    {
      id: 6,
      name: "Harvey",
      occupation: "Doctor",
      price: 90,
      image: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
    },
    {
      id: 7,
      name: "Leah",
      occupation: "Artist",
      price: 40,
      image: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
    },
    {
      id: 8,
      name: "Willy",
      occupation: "Fisherman",
      price: 40,
      image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
    },
    {
      id: 9,
      name: "Clint",
      occupation: "Blacksmith",
      price: 50,
      image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    },
  ];
  
  // function addFreelancer(name, price, occupation) {
  //   freelancers.push({ name, price, occupation });
  // }
  // addFreelancer("alyssa", "50", "dev");
  // console.log(freelancers)
  
  const colors = ["red", "green", "blue", "orange", "yellow", "purple"];
  const sizes = ["small", "medium", "large"];
  const maxResults = 9;
  const shapes = [
    {
      color: "red",
      size: "small",
    },
    {
      color: "yellow",
      size: "small",
    },
  ];
  
  /** Adds a shape with random properties to the `shapes` array */
  function addProfile() {
    profile.push({ color, size });
  }
  
  // === Render ===
  // To "render" is to update the DOM to reflect the current state.
  // In this section, we define the functions to render state.
  
  /** Updates the DOM to reflect the current state. */
  function render() {
    const squareList = document.querySelector("#squares");
    const squareElements = shapes.map((shape) => {
      const squareElement = document.createElement("li");
      squareElement.classList.add(shape.color, shape.size);
      return squareElement;
    });
    squareList.replaceChildren(...squareElements);
  
    const circleList = document.querySelector("#circles");
    const circleElements = shapes.map((shape) => {
      const circleElement = document.createElement("li");
      circleElement.classList.add(shape.color, shape.size);
      return circleElement;
    });
    circleList.replaceChildren(...circleElements);
  }
  
  // === Script ===
  // In this section, we call the functions that we've defined above.
  
  // `setInterval` will call the callback function every 1000 milliseconds (1 second)
  // and return an interval ID that we can use to stop the interval later.
  // Calling `clearInterval(addShapeIntervalId)` will stop the interval.
  
  const addShapeIntervalId = setInterval(() => {
    addShape();
    render();
    if (shapes.length == maxShapes) {
      clearInterval(addShapeIntervalId);
    }
  }, 1000);
  
  render(); // We call this function once to render the initial state
  