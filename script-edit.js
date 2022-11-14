"use strict"

let nameID = location.hash.substring(1)
let names = getSavedNames()


let searchedName = names.find(function (oneObject) {
    return oneObject.id === nameID
})
if (searchedName === undefined) {
    location.assign("/index.html")
}

document.querySelector("#iditedName").value = searchedName.firstName


let changingForm = document.querySelector("#changing-form")
changingForm.addEventListener("submit", function (event) {
    event.preventDefault()

    searchedName.firstName = event.target.elements.changingName.value

    saveNames(names)
})


window.addEventListener("storage", function (event) {
    if (event.key === "names") {
        names = JSON.parse(event.newValue)
    }

    let searchedName = names.find(function (oneObject) {
        return oneObject.id === nameID
    })
    if (searchedName === undefined) {
        location.assign("/index.html")
    }
    
    document.querySelector("#iditedName").value = searchedName.firstName
})