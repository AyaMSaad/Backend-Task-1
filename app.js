const fs = require ("fs")

//create object person
const person = {
fname : "ahmed" ,
lname : "hossam" ,
age : 20 ,
city : "alex"
}

//change obj to Json
const personjson = JSON.stringify (person)

//store in file
fs.writeFileSync("person.json", personjson);

//read file (json)
const fileJson = fs.readFileSync("person.json");

//Convert to obj
const updated_person = JSON.parse (fileJson)

//Update data
updated_person.fname = "adel";
updated_person.lname = "ahmed";
updated_person.age = 40;
updated_person.city = "cairo";

//convert obj to Json
const updated_personJson = JSON.stringify (updated_person)

//store in file
fs.writeFileSync("updated_person.json", updated_personJson);