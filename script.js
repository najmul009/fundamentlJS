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