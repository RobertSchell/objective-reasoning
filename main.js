// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

/*
function - isAdmin
parameter - user object

user = {
    firstName: string
    lastName: string
    userRole: string
}

return boolean - true or false

(userRole  === ADMIN)


*/

//
//PROBLEM 1
function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true;
    }else{
        return false;
    }
}
//return user.userRole === "ADMIN";//ALTERNATE 1 LINE SOLUTION TO PROBLEM 1

//PROBLEM 1 TEST
let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
};
let user2 ={
    firstName: 'Ed',
    lastName: 'Johnson',
    userRole: 'ADMIN'
}
console.log(isAdmin(user1));//will print false
console.log(isAdmin(user2));//will print true


//
//PROBLEM 2
function getEmail(user){
let userEmail = (`${user.firstName}.${user.lastName}@codeimmersives.com`);
return userEmail.toLowerCase();
}

//PROBLEM 2 TEST
let user ={
    firstName: "Jim",
    lastName: "Jimson" 
}
console.log(getEmail(user));// will print jim.jimson@codeimmersives.com


//
//PROBLEM 3
function getPlaylistLength(playlist){
    return playlist.songs.length
}

//PROBLEM 3 TEST
let sample = {
    name: 'my jams',
    songs: ["Vienna", "Hey Ya!", "GoGo"]
}
console.log(getPlaylistLength(sample));//will print 3

/*

function - getHardestHomework
parameters - homework array//array of homework objects

homework = {
    name: string,
    averageScore: number
}

return type: "string"

*/

//
//PROBLEM 4//REVIEW THIS PROBLEM
function getHardestHomework(homeworkArray){
    if(homeworkArray.length === 0){//error check in case array is empty
        return "";//returns empty string if given an empty array
    }
    
    let lowestHw = homeworkArray[0];//homework object

    for(let i = 0; i < homeworkArray.length; i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }
    return lowestHw.name;
}

//TEST PROBLEM 4 // will print hip-hip-array
console.log(getHardestHomework([ 
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }]))


//

/*PROBLEM 5 NOTES

function: createPhonebook

parameters: 
namesArray - strings
numbersArray - strings

return phonebook object

{
    string: string - in the following format:
    "name": "number" 
}

*/


//PROBLEM 5
function createPhonebook (namesArray, numbersArray){
    let phonebook = {};//this empty object will contain new return object 

    for(let i = 0; i < namesArray.length; i++){
        phonebook[namesArray[i]] = numbersArray[i] // becomes key/value pair
    }
    return phonebook
}
console.log(createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424']))
//will print { Melissa: '206-111-2233', Andre: '321-123-2424' }






// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};