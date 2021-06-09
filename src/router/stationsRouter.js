const fs =require ('fs')

const loadNotes = ()=> {
    try{

        const dataBuffer = fs.readFileSync('stations.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error){
        console.log(error)
        return []
    }
   
}

const stationData = loadNotes()
module.exports=stationData
