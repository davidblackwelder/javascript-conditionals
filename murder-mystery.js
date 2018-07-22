/*
 * Programming Quiz: Murder Mystery (3-4)

 In this murder mystery there are:
 	four rooms:
 		the ballroom
 		gallery
 		billiards room
 		dining room
 	four weapons:
 		poison
 		a trophy
 		a pool stick
 		a knife
 	four suspects:
 		Mr. Parkes
 		Ms. Van Cleve
 		Mrs. Sparr
 		Mr. Kalehoff

 	Each weapon correspons to a particular room
 		the poison belongs to the ballroom
 		the trophy belongs to the gallery
 		the pool stick belongs to the billards room
 		the knife belongs to the dining room

 	Each suspect was located in a specific room
 		Mr. Parkes was in the dining room
 		Ms. Van Cleve was in the gallery
 		Mrs. Sparr was in the billiards room
 		Mr. Kalehoff was in the ballroom

 	To help solve this mystery, write a combination of conditional statements that:
 		1. sets the value of weapon based on the room
 		AND
 		2. sets the value of solved to true if the value of the room matches the suspect's room
 */

// change the value of `room` and `suspect` to test your code
let room = "dining room";
let suspect = "Mr. Kalehoff";

let weapon = "";
let solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = suspect === "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy";
    solved = suspect === "Ms. Van Cleve";
} else if (room === "billiards room") {
    weapon = "pool stick";
    solved = suspect === "Mrs. Sparr";
} else {
    weapon = "poison";
    solved = suspect === "Mr. Kalehoff";
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}