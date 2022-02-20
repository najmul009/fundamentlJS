//problem-1
function  anaToVori(ana){
    if(typeof(ana) == 'string' || ana < 0){
        return 'Input a valid number'
    }
    else{
        let vori = ana /16
        return vori;
    }
}

// const voriGet = anaToVori(32)
// console.log(voriGet)

//Problem-2
function pandaCost(singara,chomoca,jilapi){
    if(typeof(singara) == 'string' || singara <0){
        return 'Input valid Numbers'
    }
    else if(typeof(chomoca) == 'string' || chomoca <0){
        return 'Input valid Numbers'
    }
    else if(typeof(jilapi) == 'string' || jilapi <0){
        return 'Input valid Numbers'
    }
    else{
        const singaraPrice = 7;
        const chomocaPrice = 10;
        const jilapiPrice =15;
        var totalPrice = (singara *singaraPrice) + (chomoca * chomocaPrice) + (jilapi * jilapiPrice)

        return totalPrice;
    }
    
}

// const totalPandaCost = pandaCost(4,9,5)
// console.log(totalPandaCost)

//problem-3
function picnicBudget(people){
    let first100 = 5000;
    let second100 = 4000;
    let restpeople = 3000;

    if(typeof(people) == 'string' || people <0){
        return 'Input a valid Number'
    }
    else if(people <= 100){
        first100Budget = first100 * people
        return first100Budget;
    }
    else if (people <=200){
        first100Budget = first100 * 100
        second100Budget = second100 * (people -100) 
        second100Budget +=  first100Budget;
        return second100Budget 
    }
    else {
        first100Budget = first100 * 100
        second100Budget = second100 * 100
        restPeopleBudget = restpeople * (people -200)
        totalPeopleBudget = first100Budget + second100Budget + restPeopleBudget
        return totalPeopleBudget;
    }
}

// const totalBudget = picnicBudget(201)
// console.log(totalBudget)