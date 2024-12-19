const fs = require('fs')
const readline = require('readline')
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function readfile(filename) {try {
    
    const filenamewithext = filename+".txt"
    const filecontent = fs.readFileSync(filenamewithext)
    return console.log(`THE CONTENT FROM FILE ${filenamewithext}:\n ${filecontent}`)
} catch (error) {
    console.log(`${filename}.txt Not Found(404)`);
    
}
}
function filenameinput() {
    rl.question(`Please Tell Question No. Without Space(Like-Question1)(Upto Question 1 to 6):` , (file)=>{
        const readfilecontent = readfile(file)
        rl.close()
    })
}
filenameinput()