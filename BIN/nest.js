#!/usr/bin/env node

const jsfunc = require("../jsfunc.js")
const fs = require("fs")

function rjson(fn) {
    let buf = fs.readFileSync(fn)
    let s = buf.toString()
    let d = JSON.parse(s)
    return(d)
}

function wjson(fn,js) {
    let s =JSON.stringify(js)
    fs.writeFileSync(fn,s)
}



var srcfn = process.argv[2]
var flat = rjson(srcfn)

var nest = jsfunc.deflatten(flat)

wjson('nest.'+srcfn,nest)
