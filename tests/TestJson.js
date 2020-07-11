const LoadJson1 = require("../resources/Globals.json")
const LoadJson2 = require("../resources/badwords.json")
const LoadJson3 = require("../resources/modwords.json")
const LoadJson4 = require("../resources/overides.json")
var validator = require('is-my-json-valid')

var validate = validator(LoadJson1)
var validate1 = validator(LoadJson2)
var validate2 = validator(LoadJson3)
var validate3 = validator(LoadJson4)

validate()
validate1()
validate3()
validate2()

if(validate.errors) {
    console.log("ERROR IN JSON:")
    console.log(validate.errors)
    process.exit(1)
}
if(validate1.errors) {
    console.log("ERROR IN JSON:")
    console.log(validate1.errors)
    process.exit(1)
}
if(validate2.errors) {
    console.log("ERROR IN JSON:")
    console.log(validate2.errors)
    process.exit(1)
}
if(validate3.errors) {
    console.log("ERROR IN JSON:")
    console.log(validate3.errors)
    process.exit(1)
}else{
    console.log("Json test passed.")
    process.exit(0)
}