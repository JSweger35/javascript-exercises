const removeFromArray = function(array, ...remove) {

    /*if (array = NaN){
        return array
    }*/
    let newArray = [];

    array.forEach(element => {
        if (!remove.includes(element)){
            newArray.push(element);
        }
    });
    

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

