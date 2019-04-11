// benerin findIndex
function countProfit(shoppers) {
    let listBarang = [ 
      ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1]
    ];
  
    // you can only write your code here!
    // if empty
    if (shoppers.length == 0) {
      return [];
    }
    // make object of barang
    var objBarang = {};
    for (var x = 0; x < listBarang.length; x++) {
        if (objBarang[listBarang[x][0]] === undefined) {
            objBarang[listBarang[x][0]] = {
                product: listBarang[x][0],
                shoppers: [],
                leftOver: listBarang[x][2],
                totalProfit: 0,
                price: listBarang[x][1]
            }
        }
    }
    
    // update shoppers leftOver and totalProfit
    for (var x = 0; x < shoppers.length; x++) {
        if (objBarang[shoppers[x].product] === undefined) {
            console.log("Product not found from " + shoppers[x].name + " with product " + shoppers[x].product);
            continue;
        }
        if (objBarang[shoppers[x].product].leftOver - shoppers[x].amount >= 0) {
            objBarang[shoppers[x].product].shoppers.push(shoppers[x].name);
            objBarang[shoppers[x].product].leftOver -= shoppers[x].amount;
            objBarang[shoppers[x].product].totalProfit += shoppers[x].amount * objBarang[shoppers[x].product].price;
        }
    }
    
    var keyBarang = Object.keys(objBarang);
    var result = [];
    for (var prodIndex = 0; prodIndex < keyBarang.length; prodIndex++) {
        result.push({
            product: objBarang[keyBarang[prodIndex]].product,
            shoppers: objBarang[keyBarang[prodIndex]].shoppers,
            leftOver: objBarang[keyBarang[prodIndex]].leftOver,
            totalProfit: objBarang[keyBarang[prodIndex]].totalProfit,
        })
    }
    return result;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]