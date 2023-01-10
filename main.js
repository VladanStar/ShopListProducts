$(document).ready(function () {
  $("#main").hide();
  $("#mainL").hide();
  let link = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
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
      if (username == customer.CustomerID && password == customer.CustomerID) {
        console.log("uspesno ste se ulogovali");
        $("#main").show();
        $("#mainL").show();
        $("#login").hide();
        uzmiPorudzbine();
        uzmiSveProizvode();
      }
    }
  });

  function uzmiPorudzbine() {
    $.ajax({
      url: orderLink,
      dataType: "json",
      type: "GET",
      success: function (result) {
        console.log(result);
        let pordzbine = result.value;
        uzmiProizvode(pordzbine);
        // iscrtajProzvod(pordzbine);
      },
      error: function (error) {},
    });
  }

  function uzmiProizvode(porudzbine) {
    $.ajax({
      url: productsLink,
      dataType: "json",
      type: "GET",
      success: function (res) {
        let products = res.value;
        for (const key in porudzbine) {
          const order = porudzbine[key];
          for (const key2 in products) {
            const product = products[key2];
            if (product.ProductID == order.ProductID) {
              console.log(product.ProductID);
              iscrtajProzvod(product, order);
            }
          }
        }
        console.log(products);
      },
      error: function (error) {
        console.error(error);
      },
    });
  }

  function uzmiSveProizvode(proizvodi) {
    $.ajax({
      url: productsLink,
      dataType: "json",
      type: "GET",
      success: function (res) {
        let products = res.value;
        for (const key in proizvodi) {
          const order = proizvodi[key];
          for (const key2 in products) {
            const product = products[key2];
            if (product.ProductID !== order.ProductID) {
              console.log(product.ProductID);
              iscrtajProzvod(product, order);
            }
          }
        }
        console.log(products);
      },
      error: function (error) {
        console.error(error);
      },
    });
  }
  function iscrtajProzvod(proizvod, porudzbina) {
    $("<div>", {
      text: porudzbina.OrderID + " - " + proizvod.ProductName,
      id: proizvod.ProductID,
    }).appendTo("#main");
  }
  
});
