let fs = require('fs');
let fileName;

console.log("What is the name of CSV file ?(exp:- input_example.csv\n")

process.stdin.on("data", data => {
    fileName = data.toString().trim()
    if (fileName.trim() == "") {
        console.log("Invalid file name,please use name.cvs");
        return;
    }

    const reportContent = fs.readFileSync(__dirname + "/" + fileName, {encoding: 'utf8', flag: 'r'})

    let orders = readCsvString(reportContent)
    let productTotals = {}
    let reportAvgQuantity = [];
    let reportPopularBrands = [];
    let distinctProductNames = [];
    let distinctBrands = [];
    for (let q = 0; q < orders.length; q++) {
        let productCountKey = "product_count_" + orders[q].product
        let productOrderKey = "product_orders_" + orders[q].product
        let productBrandKey = "product_brand_orders_" + orders[q].product + "_" + orders[q].brand

        if (distinctBrands.indexOf(orders[q].brand) === -1) {
            distinctBrands.push(orders[q].brand);
        }
        if (!productTotals[productBrandKey]) {
            productTotals[productBrandKey] = 1
        } else {
            productTotals[productBrandKey] += 1
        }
        let orderQuantity = parseInt(orders[q].count);
        if (!productTotals[productCountKey]) {
            distinctProductNames.push(orders[q].product);
            productTotals[productCountKey] = orderQuantity;
            productTotals[productOrderKey] = 1;
        } else {
            productTotals[productCountKey] += orderQuantity;
            productTotals[productOrderKey]++;
        }
    }
    for (let w = 0; w < distinctProductNames.length; w++) {
        let productCountKey = "product_count_" + distinctProductNames[w]
        let bestBrandForProduct = "";
        let bestBrandForProductCount = 0;
        for (let e = 0; e < distinctBrands.length; e++) {
            let productBrandKey = "product_brand_orders_" + distinctProductNames[w] + "_" + distinctBrands[e]
            if (productTotals[productBrandKey]) {
                if (productTotals[productBrandKey] > bestBrandForProductCount) {
                    bestBrandForProductCount = productBrandKey;
                    bestBrandForProduct = distinctBrands[e];
                }
            }


        }
        reportPopularBrands.push(`${distinctProductNames[w]},${bestBrandForProduct}`);
        reportAvgQuantity.push(`${distinctProductNames[w]},${(productTotals[productCountKey] / orders.length).toFixed(3)}`)
    }
    let reportAvgQuantityContent = reportAvgQuantity.join("\n");
    let reportPopularBrandContent = reportPopularBrands.join("\n");
    let portAvgPath = __dirname + "/" + "0_" + fileName;
    let portPopularPath = __dirname + "/" + "1_" + fileName;

    try {
        fs.renameSync(portAvgPath, portAvgPath + (new Date().getTime()) + ".old")
        fs.renameSync(portPopularPath, portPopularPath + (new Date().getTime()) + ".old")
    } catch (err) {
    }

    fs.writeFileSync(portAvgPath, reportAvgQuantityContent)
    fs.writeFileSync(portPopularPath, reportPopularBrandContent)

    function readCsvString(csvString) {
        let data = []
        let lines = csvString.split("\n");
        for (let q = 0; q < lines.length; q++) {
            let singleItem = lines[q].split(/\,/g);
            if (singleItem[0] != "") {
                data.push({
                    id: singleItem[0],
                    area: singleItem[1],
                    product: singleItem[2],
                    count: singleItem[3],
                    brand: singleItem[4],
                })
            }
        }
        return data;
    }

    process.stdout.write("Done.\n")
    process.exit(0)
})

