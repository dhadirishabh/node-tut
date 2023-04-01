// console.log("Hello Rishabh This Your First Node Program")

// let a = 20
// let b = 30
// let c = 40
// console.warn(a+b+c)

// const fs = require('fs')

// fs.writeFileSync("hello.txt", "OK Rishabh Now File is Created")

const http = require('http')

// http.createServer(( req, res ) => {
//     res.write("<h1>Hello Rishabh Dhadi</h1>")
//     res.end()
// }).listen(2200)


function dataControl ( req , res ) {
   res.write("<h1>Hello Cooder, I Am Rishabh Dhadi</h1>")
   res.end()
}

http.createServer(dataControl).listen(2200)

const colors = require('colors')
console.log("Rk".green)
