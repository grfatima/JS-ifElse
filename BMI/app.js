let name = prompt("Adin nedir")

let ceki = +prompt("Cekin ne qederdir")

let boy = +prompt("Boyun ne qederdir")

let BMI = ceki / (boy * boy)
if (BMI < 18.5){
    console.log(`"${name} Aldigimiz netice 18.5-den kicikdirse, adamin BMI-si azdir, ariqdir."`)

}else if (BMI < 25){
    console.log(`"${name} Aldigimiz netice 25-den kicikdirse, adamin BMI-si normal beden olcusune sahibdir."`)

}else if (BMI < 30){
    console.log(`"${name} Aldigimiz netice 30-den kicikdirse, adamin BMI-si kokdur."`)

}else {
    console.log(`${name} sen "obese"-dir.`)
}