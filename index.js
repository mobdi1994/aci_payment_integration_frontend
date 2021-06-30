$(document).ready(function() {
    
    fetch("https://tranquil-inlet-59029.herokuapp.com/api/checkout")
    .then((response) => response.json())
    .then(({checkoutId}) => {
    

    // Creating Script
    let script = document.createElement("script");
    script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    document.body.append(script);
 
    
    
    })
    .catch((error) => { console.log("error", error);  });

   
});

