//  funkce načítající data z localStorage
 
 const getSavedNames = function(){
    const myNames = localStorage.getItem("names")
    
    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }
 }

//  funkce pro použití při odeslání formuláře
// ukládá do localStorage jméno z formuláře

const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(oneName))
}


// Generování HTML struktury umístěnou do stránky po kliknutí na "vypiš"
// + použito i při vymazání při kliknutí na "vymazat jméno"
const generateHTMLstrukture = function(oneName){
    const newDiv = document.createElement("div")
    const newLink = document.createElement("a")
    const button = document.createElement("button")
    
    
    button.addEventListener("click", function(event){
        removeNames(names, oneName.id)
        saveNames(names)
        toListAgain()
    })
    
    // nastavení mazacího tlačítka
    button.textContent = "Vymazat jméno"
    newDiv.appendChild(button)
    
    newLink.textContent = oneName.firstName
    if(oneName.adult === true){
        newLink.classList.add("adult")
    } else {
        newLink.classList.add("no-adult")
    }
    newLink.setAttribute("href", `/edit.html#${oneName.id}`)
    newDiv.appendChild(newLink)
    
    return newDiv
}


// podle ID najdeme index daného jména a pomocí splice ho odstraníme
const removeNames = function(ourNames, id){
    const index = ourNames.findIndex(function(nameWantToCheck){
        return nameWantToCheck.id === id
    })

    if(index > -1){
        ourNames.splice(index,1)
    }
}

// znovuvypsání do stránky bez smazané položky
const toListAgain = function(){
    document.querySelector(".list-names").innerHTML = ""

    let newData = getSavedNames()
    newData.forEach(function(onlyOneName){
        const newContent = generateHTMLstrukture(onlyOneName)
        document.querySelector(".list-names").appendChild(newContent)
    })
}


