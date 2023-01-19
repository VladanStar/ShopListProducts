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
        uzmiPorudzbine();
      }
    }
  });

  $("#products").click(function () {
    $.ajax({
      url: orderLink,
      dataType: "json",
      type: "GET",
      success: function (result) {
        console.log(result);
        let pordzbine = result.value;
        uzmiSveProizvode(pordzbine);
      },
      error: function (error) {},
    });
  });
  $("#orders").click(function () {
    $.ajax({
      url: orderLink,
      dataType: "json",
      type: "GET",
      success: function (result) {
        console.log(result);
        let pordzbine = result.value;
        uzmiSveProizvode(pordzbine);
        $("#main").show();
        $("#products").hide();
        $("#login").hide();
        $("#orders").show();

      },
      error: function (error) {},
    });
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
              // za sve proizvode treba staviti !
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
  function uzmiSveProizvode(porudzbine) {
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
            //   if (product.ProductID !== order.ProductID) {
            // za sve proizvode treba staviti !
            console.log(product.ProductID);
            iscrtajProzvod(product, order);
            //   }
          }
        }
        console.log(products);
      },
      error: function (error) {
        console.error(error);
      },
    });
  }

  function iscrtajProzvod(proizvod, porudzbine) {
    $("<div>", {
      text: porudzbine.OrderID + " - " + proizvod.ProductName,
      id: proizvod.ProductID,
    }).appendTo("#main");
  }
});