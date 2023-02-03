function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]);

    studioPrice = 0;
    apartmentPrice = 0;
    
            if (month === "May" || month === "October") {
                studioPrice = (nightsCount * 50);
                apartmentPrice = 65 * nightsCount;
                if (nightsCount > 14){
                    studioPrice *= 0.70;
                    apartmentPrice *= 0.90; 
                } else {
                    nightsCount > 7;
                    studioPrice *= 0.95
                }
     

                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}       

}
hotelRoom (["May","15"])