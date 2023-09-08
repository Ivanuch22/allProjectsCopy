const link = "https://ivanuch22.github.io/"
const namesOfSites = [];
const block = document.querySelector('.block')


fetch('https://api.github.com/users/Ivanuch22/repos')
  .then(response => response.json())
  .then(data => data.forEach(element => {
    if (element === "listOfMyProjects") {
      return
    }
    console.log(data)
    namesOfSites.push(element.name)
  })
  )

  .then(sm => {
    namesOfSites.forEach(element => {
      const cart = document.createElement('div');
      cart.classList.add("cart")
      cart.innerHTML = `
       <a class="link"  target="_blank" href=${link + element}>
         <h2 class="name">${element}</h2>
       </a> 
      `
      block.appendChild(cart)
    })
  })