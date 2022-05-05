function studentManagement()
{
    var targetPoint = +document.getElementById("targetPoint").value 

    var firstSub = +document.getElementById("firstSub").value
    var secondSub = +document.getElementById("secondSub").value
    var thirdSub = +document.getElementById("thirdSub").value

    var priArea = document.getElementById("priArea").value
    var priObj = document.getElementById("priObj").value

    var result = document.getElementById("result")

    var totalPoints = totalPoint(firstSub,secondSub,thirdSub)
    var totalArea = area(priArea)
    var totalObj = object(priObj)
    
    var finalPoint = totalPoints + totalArea + totalObj
    if(targetPoint <= finalPoint && totalPoint !== 0)
    {
        result.innerHTML = "Pass"
        console.log(finalPoint)
    }
    else{
        result.innerHTML = "Fail"
        console.log(finalPoint)
    }
}



function totalPoint(firstSub, secondSub,thirdSub)
{
    var total
    if(firstSub > 0 && secondSub > 0 && thirdSub > 0)
    {
        total = firstSub + secondSub + thirdSub
        return total
    }
    else{
        return 0
    }
}




function area(priArea)
{
    var areaPoint = 0
    if(priArea === "A")
    {
        areaPoint += 2
    }
    else if(priArea === "B")
    {
        areaPoint += 1
    }
    else if(priArea === "C")
    {
        areaPoint += 0.5
    }
    else if(priArea === "X")
    {
        areaPoint = 0
    }
    return areaPoint

}

function object(priObj)
{
    var objPoint = 0

    if(priObj === "1")
    {
        objPoint += 2.5
    }
    else if(priObj === "2")
    {
        objPoint += 1.5
    }
    else if(priObj === "3")
    {
        objPoint += 1
    }
    else if(priObj === "0")
    {
        objPoint = 0
    }
    return objPoint
}