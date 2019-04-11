function shoppingTime(memberId, money) {
    // you can only write your code here!
    // Handling memberId kosong and money less than 50K 
    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }
    var customer = {};
    customer.memberId = memberId;
    customer.money = money;

    // List of product
    var product = [ 
        ["Baju H&N", 250000],
        ["Sepatu Stacattu", 1500000],
        ["Baju Zoro", 500000],
        ["Sweater Uniklooh", 175000],
        ["Casing Handphone", 50000]
    ]

    //sorting from expensive to cheaper
    product.sort(function(x, y) {y[1] - x[1]})

    //built object
    var changeMoney = money;
    var productBuy = [];
    for (var productIndex = 0; productIndex < product.length; productIndex++) {
        var productName = product[productIndex][0];
        var productPrice = product[productIndex][1]; 
        if (changeMoney >= productPrice) {
            productBuy.push(productName);
            changeMoney -= productPrice;
        }
    }
    customer.listPurchased = productBuy;
    customer.changeMoney = changeMoney;
    return customer;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja