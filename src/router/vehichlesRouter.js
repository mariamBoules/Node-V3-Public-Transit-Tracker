const fs =require ('fs')



const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('vehicles.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error){
        console.log(error)
        return []
    }
   
}

const vehichlesData = loadNotes()
module.exports=vehichlesData