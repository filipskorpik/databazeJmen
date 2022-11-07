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

