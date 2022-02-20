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
