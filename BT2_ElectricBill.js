function electricBill()
{
    var userName = document.getElementById("userName").value 
    var kwNumber = +document.getElementById("kwNumber").value
    var customer = document.getElementById("customer")
    var paying = document.getElementById("paying")

    // Biến hứng giá trị tiền điện
    var totalPay = calcKW(kwNumber,500,650,850,1100,1300).toLocaleString()

    customer.innerHTML = `Tên khách hàng : ${userName}`
    paying.innerHTML = `Tổng tiền : ${totalPay}đ`

}

// Hàm tính tiền điện
function calcKW(kwNumber,kw_1_50,kw_50_100,kw_100_200,kw_200_350, kws)
{
    var total = 0
    if(kwNumber <= 50)
    {
        total = kwNumber * kw_1_50
    }
    else if(kwNumber > 50 && kwNumber <= 100)
    {
        total = 50*kw_1_50 + (kwNumber - 50)*kw_50_100
    }
    else if(kwNumber > 100 && kwNumber <= 200)
    {
        total = 50*kw_1_50 + 50*kw_50_100 + (kwNumber - 100)*kw_100_200
    }
    else if(kwNumber > 200 && kwNumber <= 350)
    {
        total = 50*kw_1_50 + 50*kw_50_100 + 100*kw_100_200 + (kwNumber - 200)*kw_200_350
    }
    else 
    {
        total = 50*kw_1_50 + 50*kw_50_100 + 100*kw_100_200 + 150*kw_200_350 + (kwNumber - 350)*kws
    }
    return total
}