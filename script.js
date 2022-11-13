// načtení dat z localStorage do proměnné names, pokud prázdný, tak vytvoří prázdné pole
const names = getSavedNames()

// odeslání formuláře a uložení do localStorage pomocí promenné names
myForm = document.querySelector("#test-form")
let myCheckbox = document.querySelector(".my-checkbox")

myForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value,
        adult: myCheckbox.checked
    })

    event.target.elements.firstName.value = ""
    myCheckbox.checked = false
    saveNames(names)
}) 


// vypisování zpět do stránky
let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", function(event){
    document.querySelector(".list-names").innerHTML = ""
    let namesFromStorageJSON = JSON.parse(localStorage.getItem("names"))

    namesFromStorageJSON.forEach(function(myName){
        const oneNameHTML = generateHTMLstrukture(myName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})

window.addEventListener("storage", function(){
    location.reload()
})