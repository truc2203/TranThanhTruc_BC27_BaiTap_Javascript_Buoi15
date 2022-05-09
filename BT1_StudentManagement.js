function studentManagement()
{
    var targetPoint = +document.getElementById("targetPoint").value 

    var firstSub = +document.getElementById("firstSub").value
    var secondSub = +document.getElementById("secondSub").value
    var thirdSub = +document.getElementById("thirdSub").value

    var priArea = document.getElementById("priArea").value
    var priObj = document.getElementById("priObj").value

    var result = document.getElementById("result")

    //Các biến hứng giá trị của hàm tổng điểm và tổng điểm ưu tiên
    var totalPoints = totalPoint(firstSub,secondSub,thirdSub)
    var totalPriority = priority(priArea,priObj)

    var check = checkPoint(firstSub,secondSub,thirdSub)

    //Điểm tổng kết = tổng điểm + tổng điểm ưu tiên
    var finalPoint = totalPoints + totalPriority

    //Đạt nếu điểm chuẩn < điểm tổng kết và không có môn nào 0đ
    if(targetPoint <= finalPoint && check === 1)
    {
        result.innerHTML = ` Bạn đã đậu với tổng điểm : ${finalPoint}đ`
    }
    //Không đạt
    else{
        result.innerHTML = ` Bạn đã rớt với tổng điểm : ${finalPoint}đ`
    }
}

//Hàm tính tổng điểm 
function totalPoint(firstSub, secondSub,thirdSub)
{
    return firstSub + secondSub + thirdSub
}


// Hàm kiểm tra rớt nếu có 1 trong 3 môn 0đ
function checkPoint(firstSub,secondSub,thirdSub)
{

    if(firstSub > 0 && secondSub > 0 && thirdSub > 0)
    {
        return 1
    }
    else{
        return 0
    }
}

// Hàm tính tổng điểm ưu tiên theo khu vực + đối tượng
function priority(priArea,priObj)
{
    var areaPoint = 0
    var objPoint = 0
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
    return areaPoint + objPoint

}

