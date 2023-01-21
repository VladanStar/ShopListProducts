$(document).ready(function () {
  $("#main").hide();
  $("#products").hide();
  let link =
    "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
  let orderLink =
    "https://services.odata.org/V3/Northwind/Northwind.svc/Order_Details";
  let productsLink =
    "https://services.odata.org/V3/Northwind/Northwind.svc/Products";
  let customers;
  $.ajax({
    url: link,
    dataType: "json",
    type: "GET",
    success: function (result) {
      console.log(result);
      customers = result.value;
    },
    error: function (error) {
      console.error(error);
    },
  });

  $("#loginBtn").click(function () {
    let username = $("#username").val();
    let password = $("#password").val();
    for (const key in customers) {
      const customer = customers[key];
      if (
        username == customer.CustomerID &&
        password == customer.CustomerID
      ) {
        console.log("uspesno ste se ulogovali");
        $("#main").show();
        $("#products").show();
        $("#login").hide();
    
      }
    }
  });

  $("#products").click(function () {
 
    fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Products/")
    .then((data) => data.json())
    .then(function (data) {
      // data = JSON.parse(data);
      console.log(data.value);
      let html = "";
      data.value.map((product) => {
        html += `
                <div class="col-3 product-container">
                    <div class="card product">
                        <div class="card-body">
                        <img
                        src="${"https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg"}"
                       class="card-img-top"
                       alt="${product.ProductName}"
                       />
                       <h5c lass="card-title">${product.ProductName}</h5>
                            <p class="card-title"> id: ${product.ProductID}</p >
                            <p class="card-text"> quantity:${
                              product.QuantityPerUnit
                            } </p>
                            <p class="card-text"> id category: ${
                              product.CategoryID
                            } </p>
                            <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${
                              product.ProductID
                            })">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        console.log(product.ProductID);
  
        document.getElementsByClassName("products")[0].innerHTML = html;
      });
    });


 

})



})