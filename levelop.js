//Pricing

   // price 
    p = 0
    //the price of a logo serves as a unit (u) of value, time, workload ...
    const logo_p = 60
    
    const logo = 1
    const bcard = 0.5
    const kit = 1.6
    const site = 2
    const media = 1.8
    const branding = 2.2 

    // updateable prices in the pricing table

    document.getElementById("logo_price").innerHTML = `${logo_p * logo}$`

    document.getElementById("bcard_price").innerHTML = `${logo_p * bcard}$`

    document.getElementById("kit_price").innerHTML = `${logo_p * kit}$`

    document.getElementById("site_price").innerHTML = `${logo_p * site}$`

    document.getElementById("media_price").innerHTML = `${logo_p * media}$`

    document.getElementById("branding_price").innerHTML = `${logo_p * branding}$`

   

    //package_1: logo + branding
    document.getElementById("package_1").innerHTML = `${logo_p * (logo + branding)}$`

    //package_2: logo + branding + bcard
    document.getElementById("package_2").innerHTML = `${logo_p * (logo + branding) * 0.9}$`

    //package_3: logo + site + media + branding
    document.getElementById("package_3").innerHTML = `${logo_p * (logo + site + media + branding) * 0.85}$`



    function pricing(){
        let p = 0
        if(document.getElementById("logo").checked ==   true && 
           document.getElementById("site").checked == true && 
           document.getElementById("media").checked == true && 
           document.getElementById("branding").checked == true &&
           document.getElementById("bcard").checked == false &&
           document.getElementById("kit").checked == false)
        {p = logo_p * (logo + site + media + branding) * 0.85}

        else if(document.getElementById("logo").checked == true && 
            document.getElementById("branding").checked == true && 
            document.getElementById("bcard").checked == true &&
            document.getElementById("kit").checked == false &&
            document.getElementById("site").checked == false &&
            document.getElementById("media").checked == false)
            {p = logo_p * (logo + branding)}

        else if(document.getElementById("logo").checked == true && 
            document.getElementById("branding").checked == true &&
            document.getElementById("bcard").checked == false &&
            document.getElementById("kit").checked == false &&
            document.getElementById("site").checked == false &&
            document.getElementById("media").checked == false)
            {p = logo_p * (logo + branding) * 0.9}

    else{
        let u = 0
        
        if(document.getElementById("logo").checked == true){ u += logo}
        if(document.getElementById("bcard").checked == true){ u += bcard}
        if(document.getElementById("kit").checked == true){ u += kit}
        if(document.getElementById("site").checked == true){ u += site}
        if(document.getElementById("media").checked == true){ u += media}
        if(document.getElementById("branding").checked == true){ u += branding}
        
        p = logo_p * u
        }

        return p

    }

    
    document.getElementById("quote_button").addEventListener("click", function () {
        const price = pricing()
        document.getElementById("price").value = price
    })
    
    
