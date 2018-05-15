/*Simple program to convert first letter of each word from a sentence to upper case
 E.g : backend interns are the best -> Backend Interns Are The Best
 Things I learnt -> functions, for each statement, string operations and the typeof keyword
*/

function firstLetterToUpper(sentence){
    if (typeof(sentence) == "string"){ //let's make sure we are working with valid words
        var output = ""; //declare and initialize this variable to avoid seeing Undefined on our screen
        var words = sentence.split(' ');
        words.forEach(function(word) {
             word[0].toUpperCase() + " ";//get first letter then capitalize it
            //output += firstLetter + word.slice(1,word.length)+ " ";
            console.log(word.substr(0,1).toUpperCase());
            });
        } else {
            output = "Sorry, only words are allowed";
        }
    console.log(output);
}
//let's test run
firstLetterToUpper("hello world from nodeland");
//try this too
firstLetterToUpper(934);