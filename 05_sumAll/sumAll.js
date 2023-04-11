const sumAll = function(first, second) {
    //sum = first + second;
    if (first > second){
        temp = first;
        first = second;
        second = temp;
    }

    if (first < 0 || second < 0){
        return "ERROR";
    }
    if (typeof first != "number" || typeof second != "number"){
        return "ERROR";
    }

    let list = [];

    for (first ; first <= second; first++){
        list.push(first);
    }

    let sumList = list.reduce((first, second) => first + second
    );

    return sumList;
};

// Do not edit below this line
module.exports = sumAll;
