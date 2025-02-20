let name = prompt("Adinizi daxil edin:")
let gender = prompt("Cinsinizi daxil edin: (q/k)")
let age = prompt("Yasinizi daxil edin:")

if (age >= 18){
    if (gender === "k" || gender === "K"){
        console.log("Xos gelmisiniz Cenab " + name)

    }else if (gender === "q" || gender === "Q"){
        console.log("Xos gelmisiniz Xanim " + name)

    }else {
        console.log("Xos gelmisiniz " + name )

    }
} else {
    console.log("Yasiniz 18-den kicikdir.")

}
