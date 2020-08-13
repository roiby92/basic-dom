// const arrowUp = document.getElementById("up")
// const arrowDown = document.getElementById("down")
// const arrowRight = document.getElementById("right")
// const arrowLeft = document.getElementById("left")

// const ball = document.getElementById("block")
// let position = parseInt(ball.style.bottom) || 0
// arrowUp.onclick = function () {

//     position -= 15
//     ball.style.top = position + "px"
// }
// arrowDown.onclick = function () {

//     position += 15
//     ball.style.top = position + "px"
// }
// arrowRight.onclick = function () {

//     position += 15
//     ball.style.left = position + "px"
// }
// arrowLeft.onclick = function () {


//     position -= 15
//     ball.style.left = position + "px"
// }


// const name = prompt('Please enter the name for your reservation');
// console.log(reservations.hasOwnProperty(name))
// if (reservations.hasOwnProperty(name)) {
//     if (reservations[name].claimed) {
//         alert("Hmm, someone already claimed this reservation")
//     } else {
//         alert(`Welcome  ${name}`)
//     }
// }
// else {
//     alert("You have no reservation")
// }


// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
// }

// const input = document.getElementById('input')

// const submit = document.getElementById('submit')

// submit.onclick = function () {
//     let p = document.createElement('p')
//     if (reservations.hasOwnProperty(input.value)) {
//         if (reservations[input.value].claimed) {
//             p.textContent = "Hmm, someone already claimed this reservation"
//         } else {
//             p.textContent = `Welcome  ${input.value}`
//         }
//     } else {
//         p.textContent = "You have no reservation"
//     }
//     document.body.appendChild(p)
// }

console.log("helllloooo\nwwwwwwwwwwww")
const cont = document.getElementById("container")
const colorArr = ['#ff0000', '#00ff00', '#0000d6', '#cb98a7', '#b4f1a7', '#2542db']
const createDivs = function () {
    for (let i = 0; i < 5; i++) {
        let box = document.createElement('div')
        box.onmouseenter = function () {
            box.style.background = colorArr[Math.floor(Math.random() * 5)]
        }
        box.setAttribute("class", "new-div")
        cont.appendChild(box)
    }
}
createDivs()




const validate = function () {

    const myForm = document.getElementById('form')
    const userName = document.getElementById('userName')
    const bDay = document.getElementById('bDay')
    const salary = document.getElementById('salary')
    const phone = document.getElementById('phone')
    const submit = document.getElementById('submit')

    let mesge = ""
    if (userName.value < 2) {
        mesge += "name is empty\n"
    }
    if (salary.value < 10000 || salary > 16000) {
        mesge += "Salary must be greater than 10,000 but less than 16,000\n"
    }
    if (bDay.value == null) {
        mesge += 'enter your birth-day\n'
    }
    if (phone.value.length != 10) {
        mesge += "phone num must be 10 digits"
    }
    const msErr = document.createElement('p')
    if (mesge.length != 0) {
        msErr.innerHTML = mesge
    }
    else {
        mesge += `Wllcome to our family ${userName.value}`
        msErr.innerHTML =  mesge
    }
    myForm.appendChild(msErr)
}

