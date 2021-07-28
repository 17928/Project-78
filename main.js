var images = ["https://images-na.ssl-images-amazon.com/images/I/51hhFOpOE%2BL._SY445_SX342_QL70_ML2_.jpg","https://lh3.googleusercontent.com/proxy/1umDBQ77EPjRrhUz8s3YBT5pE5IO221fH8_T6XfICM4rH_XivoxUgIWu-m7Vy2TxWBjLX5h8pNnbVgIEiXglkbIFaLpf7-BiCxVQoZkBy6Bi78a-bdnyUBDQT8yVV08I64mYfOrpKHffj91CZqM8kpmxDA","https://s.clipartkey.com/mpngs/s/22-229826_black-sisters-clipart-clip-art-black-sister.png","https://cdn2.vectorstock.com/i/1000x1000/98/31/face-mother-family-people-vector-14199831.jpg"];
var names=["Family Book", "Naresh Gogineni", "Thanvika Gogineni", "Kavitha Parichuri"]
var i=0;
function update ()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array  )
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}