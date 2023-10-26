//GLOBAL VARIABLES
let basePrice = 0;
let taxAmount = 0;
let totalDue = 0;
const TAX_RATE = 0.0825;

function submitOrder(
    scoopCount, 
    containerType, 
    hasSpinkles, 
    hasFudge, 
    hasWhip, 
    hasCherry
){
    basePrice = 2.25 //ONE SCOOP

    const additinalScoops = scoopCount - 1;
    // basePrice = basePrice + (1.25 * additional scoops);
    basePrice += 1.25 * additinalScoops;//SAME AS ABOVE COMMENT

    if(containerType === "cup"){
        if(hasSpinkles){
            basePrice += 0.5
        }
        if(hasFudge){
            basePrice += 1.25
        }
        if(hasWhip){
            basePrice += 0.25
        }
        if(hasCherry){
            basePrice += 0.25
        }
    }
    taxAmount = TAX_RATE * basePrice;
    totalDue = basePrice + taxAmount;
}

//TEST!!!!
submitOrder(4, "cup", true, true, true, true)
console.log(basePrice, taxAmount, totalDue);

submitOrder(1, "cone", false, false, false, false)
console.log(basePrice, taxAmount, totalDue);