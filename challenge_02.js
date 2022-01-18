/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */


let firstname = prompt("hier geben sie eine name")
let age = parseInt(prompt("hier geben Sie Alter"))

switch (true) {
    case (age >= 0) && (age <= 5):
        console.log(firstname + " Trinkt Milch");
        break;
    case (age >= 6) && (age <= 12):
        console.log(firstname + " Trinkt Saft");
        break;
    case (age >= 13) && (age <= 17):
        console.log(firstname + " Trinkt Cola");
        break;
    case (age >= 18) && (age <= 130):
        console.log(firstname + " Trinkt Wein");
        break;

    default:
        console.log(firstname + " Bitte Tee trinken");
        break;
}
