const fs =require ('fs')



const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('paths.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error){
        console.log(error)
        return []
    }
   
}

const pathData = loadNotes()
module.exports=pathData



 
       
    
        

   
 

 
 