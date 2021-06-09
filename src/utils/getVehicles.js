const nearestStation = require('./nearbyStations')
const mongo = require('../db/mongo')
const pathModel = require('../model/pathModel')

const updateVehicle = (latitude, longitude, vehicleId) => {
    vehicle = vehicles.find((vehicle) => vehicle.id == vehicleId)

    if (vehicle.status) {
        myVehiclePath = vehicle.path[0]
    } else {
        myVehiclePath = vehicle.path[1]
    }

    const path = vehiclePath[myVehiclePath - 1]
    const stationsOnPath = path.stations

    nearestStation(latitude, longitude, stationsOnPath, 'driving', (error, { nearestStationData }) => {
        if (error) {
            return console.log(error)
        }

        vehicle.lastStation = nearestStationData

        if (nearestStationData.id == stationsOnPath[stationsOnPath.length - 1]) {
            vehicle.status = !vehicle.status
        }
    })
}

function getVehicle(vehicles, route, vehicleStations, vehiclePath) {
    //a3raf el path w a5od el ana 3aizah 
    //ashoof el gayiin na7yet el pickup station w a7otohom f priority queue
    var clientPath = 0
    var myVehiclePath = 0
    const Queue = []
    var counter = 0
    var lastStationID

    vehiclePath.forEach(path => {
        if (path.stations.indexOf(vehicleStations[route.pickupStation.id - 1]._id) < path.stations.indexOf(vehicleStations[route.dropoffStation.id - 1]._id)) {
            clientPath = path
        }
    })

    vehicles.forEach(vehicle => {
        var stationObjectID = vehicle.lastStation

        if (vehicle.status) {
            myVehiclePath = vehicle.path[0]
        } else {
            myVehiclePath = vehicle.path[1]
        }

        if (myVehiclePath == clientPath.id) {
            var i = 0

            const result = vehicleStations.find((station) => station._id == stationObjectID.toString())
            lastStationID=result.id
            console.log(lastStationID)
            if (vehiclePath[myVehiclePath - 1].stations.indexOf((vehicleStations[route.pickupStation.id - 1])._id) >= vehiclePath[myVehiclePath - 1].stations.indexOf((vehicleStations[lastStationID - 1])._id)) {
                console.log(lastStationID)
                Queue.push(vehicle)
            }
        }
        else {
            return //console.log('No Buses going this way') 
        }
    });
    console.log(Queue)
    return Queue
}

module.exports = {
    getVehicle
}