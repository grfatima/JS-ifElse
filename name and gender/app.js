let name = prompt("Adinizi daxil edin:");
let gender = prompt("Cinsinizi daxil edin (q/k):");

switch (gender) {
    case "Q":
    case "q":
        console.log("Salam xanim " + name);
        break;

    case "K":
    case "k":
        console.log("Salam cenab " + name);
        break;

    default:
        console.log("Duzgun daxil edin.");
}
