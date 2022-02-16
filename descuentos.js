// FORMULA DESCUENTO [P *( 100 -D ] / 100
// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// function onClickButtonPriceDiscount()
// {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;

    // let discount;

    // switch(couponValue)
    // {
    //     case coupon[0]:
    //     discount = 15;
    //     break;

    //     case coupon[1]:
    //     discount = 10;
    //     break;

    //     case coupon[2]:
    //     discount = 12;
    //     break;

    //     default: // NO FUNCIONA EL DEFAULT
    //     ResultP.innerText = priceValue, "you dont have any coupon";
    // }

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
//     ResultP.innerText = "The finally order is: $" + precioConDescuento;

// }

// const coupon = [   
// "60+-coupon",
// "Discapacity-coupon",
// "Babies-coupon",
// ];





// console.log(
// {
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });



//ARRAY + OBJ

let discount;

const coupons = [
    {
        name: "up60",
        discount: 12,
    },
    {
        name: "Galicia_Bank",
        discount: 4,
    },
    {
        name: "Cash",
        discount: 15,
    }
]

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    ResultP.innerText = "The finally order is: $" + precioConDescuento;

    const isUserCouponValueValid = function (coupon)
    {
        return coupon.name === couponValue;   
    };

    const userCoupon = coupons.find(isUserCouponValueValid);

    if (!userCoupon) {
         
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "The coupon is not valid. " + "\nThe finally order is: $" + priceValue;
        
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "The finally order with discount is: $" + precioConDescuento;
    }
}
