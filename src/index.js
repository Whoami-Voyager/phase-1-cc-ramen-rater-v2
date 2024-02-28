// Callbacks
const handleClick = (ramen) => {
  const image = document.querySelector("#ramen-menu img")
  const description = document.querySelector("#ramen-detail")
  image.addEventListener('click', () => {
    const ramName = document.querySelector(".name")
    const restaurantName = document.querySelector(".restaurant")
    ramName.textContent = ramen.name
    restaurantName.textContent = ramen.restaurant
    description.append(ramName, restaurantName)
  })
};

const addSubmitListener = () => {
  const submit = document.querySelector("#submit-button")
  submit.addEventListener('click', 'submit', () => {
    const ramNew = document.querySelector("#ramen-menu")
  })
}

const displayRamens = () => {
  const ramenMenu = document.querySelector("#ramen-menu");
  return fetch("http://localhost:3000/ramens")
    .then(r => r.json())
    .then(data => {
      const images = data.images
      images.forEach(images => {
        const createImg = document.createElement("img");
        createImg.src = images.image;
        ramenMenu.append(createImg)
      });
    });
};


const main = () => {
  document.addEventListener('DOMContentLoaded')
  displayRamens()
  addSubmitListener()
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
