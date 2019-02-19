//cycle through array
//look at the length of the string in each position of the array
//compare the length of the string in each position of the array to the length  of the string passed in via the string parameter
//if the string in the current array position is shorter than the string in the string argument, push to an array, otherwise do nothing and check the next position of the string array
//when the end of the string array is reached, return the value of the output array

var gameArray=[
    'Player Unknown\'s Battlegrounds',
    'Apex',
    'Battlefield V',
    'Path of Exile',
    'Hotline Miami',
    'Smash',
    'Quake',
    'Fallout'
];

console.log("Games Library: "+gameArray);


function longNames(string,array){
    var nameOutputArray= [];

    for (var game= 0; game < array.length; game++){

        if(string.length < array[game].length){
            nameOutputArray.push(array[game]);

        }

    }

    return nameOutputArray;

}


















