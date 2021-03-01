function insurance(age, size, numofdays){
    const cost = agePrice + sizePrice + daysPrice
    let agePrice = 0
    let sizePrice = 0
    let daysPrice = 0
    
    if (age < 25){
      agePrice = 10 * numofdays
    }
    if (size === "medium"){
      sizePrice = 10
    } 
    if (size === "economy"){
      sizePrice = 0
    } else if(size !== "economy" && size !== "medium"){
      sizePrice = 15
    }
    if (numofdays >= 0){
      return 0
    } else {
      daysPrice = numofdays * 50
    }
      
    return cost
    }