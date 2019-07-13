

function sumArray(array){
    //array is passed in as arg
    //array arg is assigned
    //loop through array and add each index to the next on each iteration
    //use an for loop checking against array length
    //keep looping until end of array
    //on each pass use what to add? need a temp var to add the index value to

    var arrayValue = 0;
    for(index = 0; index < array.length; index++){
        arrayValue += array[index];

    }

    return arrayValue;
}

function fitWithinVal(array,num){
    //compare array and num
    //note the size of the num
    //need a temp var to hold result of additions of array indexes
    //need a var to hold an array
    //if an index value is reached that is larger than the num skip over it
    //or
    //if the temp var is less than the num, and adding any further index values would cause it to exceed num value, skip
    //after each number is added, place it in a new array consisting of only numbers that were added
    //when the temp var is equal to the num, stop
    //return the array

    var resultArray = [];
    var tempVal = null;

    for(index = 0; index < array.length; index++){

        if(array[index] > num || (array[index]+tempVal) > num){
            continue;
        }
        tempVal+=array[index];
        resultArray.push(array[index])
    }
    return resultArray;
}


function getAllNamesShorterThan(nameArray, value){
    //loop through array
    //at each index position count the number of chars in string
    //create variable to store number of chars to be compared against
    //create empty array to store the shortest names in
    //compare number of chars tempvalue in current string to the given value
        //if the tempvalue is shorter than value, continue to next index position
        //otherwise push name to the new array
    //when end of nameArray is reached, exit loop
    //return new array
    var shortestNames = null;
    var name = null;

    for (index = 0; index < nameArray.length; index++){
        name= nameArray[index];
        if(name.length > value){
          continue;
        }
        shortestNames.push(name);
    }

    return shortestNames;
}

function makeLabel(){

}
