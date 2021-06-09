const {Mongoose}  = require('mongoose')
const mongo = require('../db/mongo')
const stationModel = require('../model/stationsModel')
const stationsRouter = require('./stationsRouter')
const pathModel = require('../model/pathModel')
const pathsData = require('./pathsRouter')
const vehiclesData = require('./vehichlesRouter')
const vehichleModel = require('../model/vehicleModel')


const connectToMongoDB = async ()=> {
    await mongo().then(async (Mongoose) => {
        try {
            console.log('Connected to mongodb!')
         
            await pathModel.insertMany(pathsData)
            await vehichleModel.insertMany(vehiclesData)
            //await new stationsModel(stationData[stationData.length-1]).save()
            //await stationModel.insertMany(stationsRouter)
            //await new stationsModel(stationData[0]).save()
            //await new paths.insertMany(pathData)
            //const result = await collection.findOne(query)
            //console.log('result',result)
            //return result
            // const stationResult = await stationModel.findOne({
            //     _id: result.stations[0]
            // })
            // console.log ('stationResult',stationResult)
            // console.log('Result:', result)
            // //console.log('Data Inserted Correctly...')

        }
        catch (error) {
            console.log(error)
        }
        finally {
            Mongoose.connection.close()
            console.log('Connection Closed...')
        }



    })

}
connectToMongoDB()



