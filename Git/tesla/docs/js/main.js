const menuButton = document.querySelector('.menuBlock');
const headerListCars = document.querySelector('.cars');
const headerUser = document.querySelector('.user');
const body = document.body
menuButton.addEventListener('click', () => {
    headerListCars.classList.toggle('cars--active');
    headerUser.classList.toggle('user--active');
    menuButton.classList.toggle('menuBlock--active')
    body.classList.toggle('body--active')
})

//функція скролу при натиску на стрілку
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1);
        console.log(blockID)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const orderButtons = document.querySelectorAll('.order');
const modalWindow = document.querySelector('.modalForms');
const exit = document.querySelector('.exit');
const form = document.querySelector('.form')
orderButtons.forEach(element => {
    element.addEventListener('click', () => {
        modalWindow.classList.add('modalForms--active')
        body.classList.add('body--active');
    })
})

const closeModal = () => {
    modalWindow.classList.remove('modalForms--active')
    body.classList.remove('body--active');
}

exit.addEventListener('click', () => {
    closeModal();
})
modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        closeModal()
    }
})




const data = [
    {
        "img": "img/sneakers/1.jpg",
        "name": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": "12 999",
        "isLike": false,
        "isAdded": false,
        "id": 1
    },
    {
        "img": "img/sneakers/2.jpg",
        "name": "Мужские Кроссовки Nike Air Max 270",
        "price": "12 999",
        "isLike": false,
        "isAdded": false,
        "id": 2
    },
    {
        "img": "img/sneakers/3.jpg",
        "name": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": "8 499",
        "isLike": false,
        "isAdded": false,
        "id": 3
    },
    {
        "img": "img/sneakers/4.jpg",
        "name": "Кроссовки Puma X Aka Boku Future Rider",
        "price": "8 999",
        "isLike": false,
        "isAdded": false,
        "id": 4
    },
    {
        "img": "img/sneakers/5.jpg",
        "name": "Мужские Кроссовки Under Armour Curry 8",
        "price": "7 099",
        "isLike": false,
        "isAdded": false,
        "id": 5
    },
    {
        "img": "img/sneakers/6.jpg",
        "name": "Мужские Кроссовки Nike Kyrie 7",
        "price": "11 299",
        "isLike": false,
        "isAdded": false,
        "id": 6
    },
    {
        "img": "img/sneakers/7.jpg",
        "name": "Мужские Кроссовки Jordan Air Jordan 11",
        "price": "10 999",
        "isLike": false,
        "isAdded": false,
        "id": 7
    },
    {
        "img": "img/sneakers/8.jpg",
        "name": "Мужские Кроссовки Nike LeBron XVIII",
        "price": "17 499",
        "isLike": false,
        "isAdded": false,
        "id": 8
    },
    {
        "img": "img/sneakers/9.jpg",
        "name": "Мужские Кроссовки Nike Lebron XVIII Low",
        "price": "13 699",
        "isLike": false,
        "isAdded": false,
        "id": 9
    },
    {
        "img": "img/sneakers/10.jpg",
        "name": "Кроссовки Puma X Aka Boku Future Rider",
        "price": "12 599",
        "isLike": false,
        "isAdded": false,
        "id": 10
    }
]
for (key of data) {
    console.log(key.name)
}

data.forEach((element, index, array) => {
    console.log(element, index, array)
})
console.log(data.map((element, index) => {
    return element.name
}))
console.log(data.filter((element, index) => element.id < 5))
console.log(data.reduce((total, element) => total + element.id, 0))
console.log(data.find(element => element.id === 7))
