function addToDisplay(value){
    var result = document.getElementById("result")
    if(value ==="ac"){
        result.textContent = "0"
    }else if(value === "C"){
        result.textContent = result.textContent.slice(0,-1)
    }else if(value === "="){
        try{
            result.textContent = eval(result.textContent)
        }catch(err){
            result.textContent = "Error"
        }
    }else if(value === "%"){
        var numbers = result.textContent.split(/[\+\-\*\/]/)
        var lastNumber = numbers[numbers.length-1]
        if(lastNumber){
            var percentage = parseFloat(lastNumber) / 100
            result.textContent = result.textContent.replace(lastNumber , percentage)
        }
    }else{
        if(result.textContent === "0"){
            result.textContent = value
        }else{
            result.textContent += value
        }
    }
}
