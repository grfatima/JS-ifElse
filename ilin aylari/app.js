let ay = prompt("Ilin necenci ayidir? (1-12 arasi reqem daxil edin.)");

let aylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

if (ay >= 1 && ay <= 12){
    console.log(`Bu ay ${aylar[ay-1]} ayidir.`);

}else {
    console.log("1-12 arasi reqem daxil edin!");
}
