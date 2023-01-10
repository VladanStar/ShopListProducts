$(document).ready(function () {
   let mainL = document.getElementById("mainL");
mainL.style.display = "none";
let main = document.getElementById("main");
let login = document.getElementById("login")

let link = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
let orderLink = "https://services.odata.org/V3/Northwind/Northwind.svc/Order_Details";
let productsLink = "https://services.odata.org/V3/Northwind/Northwind.svc/Products";
let customers;
fetch(link)
    .then((response) => response.json())
    .then((data) => function (result) {
        console.log(result);
        customers = result.value;
    });

    $("#loginBtn").click(function () {
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        for (const key in customers) {
            const customer = customers[key];
            if (username == customer.CustomerID
                && password == customer.CustomerID) {
                console.log("uspesno ste se ulogovali");
              main.show();
                login.hide();
                uzmiPorudzbine();
            }
        }
    });
    function uzmiPorudzbine() {
        fetch(orderLink)
    .then((response) => response.json())
    .then((data) => function (result) {
        console.log(result);
        let pordzbine = result.value;
        uzmiProizvode(pordzbine);
    });
    
    }
})