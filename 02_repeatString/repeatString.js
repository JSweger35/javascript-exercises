const repeatString = function(sent, rep) {
    //let sent = 'Hello';
    //let rep = 3;
    let sentence = '';

    if (rep < 0){
        return 'ERROR';
    }

    for (let i = 0; i < rep; i++){
        sentence += sent;
    }
    return sentence;
    //console.log(sent)
};

// Do not edit below this line
module.exports = repeatString;
