function tradeCommisions(input) {
    let [town, sales] = input;
    sales = Number(sales);
    let range = 0;
    //set range
    if (sales >= 0 && sales <= 500) {
        range = 1;
    } else if (sales > 500 && sales <= 1000) {
        range = 2;
    } else if (sales > 1000 && sales <= 10000) {
        range = 3;
    } else if (sales > 10000) {
        range = 4;
    } else {
        range = -1;
    }
    //switch town >> switch range
    switch (town) {
        case "Sofia":
            switch (range) {
                case 1:
                    console.log((sales * 0.05).toFixed(2));
                    break;
                case 2:
                    console.log((sales * 0.07).toFixed(2));
                    break;
                case 3:
                    console.log((sales * 0.08).toFixed(2));
                    break;
                case 4:
                    console.log((sales * 0.12).toFixed(2));
                    break;
                case -1:
                    console.log("error");
                    break;
            }
            break;
        case "Varna":
            switch (range) {
                case 1:
                    console.log((sales * 0.045).toFixed(2));
                    break;
                case 2:
                    console.log((sales * 0.075).toFixed(2));
                    break;
                case 3:
                    console.log((sales * 0.1).toFixed(2));
                    break;
                case 4:
                    console.log((sales * 0.13).toFixed(2));
                    break;
                case -1:
                    console.log("error");
                    break;
            }
            break;
        case "Plovdiv":
            switch (range) {
                case 1:
                    console.log((sales * 0.055).toFixed(2));
                    break;
                case 2:
                    console.log((sales * 0.08).toFixed(2));
                    break;
                case 3:
                    console.log((sales * 0.12).toFixed(2));
                    break;
                case 4:
                    console.log((sales * 0.145).toFixed(2));
                    break;
                case -1:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
    }
}
tradeCommisions(["Plovdiv", "500"])