const user = require("../Models/userSchema")
const UserFlightSchema = require("../Models/UserFlightSchema")
const FlightSchema = require("../Models/FlightSchema")

exports.showFlights = (req,res) =>{
    
    const fromDestination = req.body.departureLocation;
    const toDestination = req.body.arrivalLocation;
    const departureDate = req.body.departureDate;
    const arrivalDate = req.body.arrivalDate;

    return FlightSchema.find({departureLocation: fromDestination,arrivalLocation: toDestination,
        departureDate: departureDate, arrivalDate: arrivalDate})
    .exec()
    .then((flights) => {
        return res.json(flights);
    })
    .catch(error=>{
        return {
            error: "No Flight Found "+error
        };
    })

}

exports.showFlight = (req,res) =>{
    
    const flightNumber = req.body.flightNumber;

    return FlightSchema.find({flightNumber: flightNumber})
    .exec()
    .then((flights) => {
        return res.json(flights);
    })
    .catch(error=>{
        return {
            error: "No Flight Found "+error
        };
    })

}

exports.bookFlight = (req,res) => {
    const userFlight= new UserFlightSchema(req.body);
    userFlight.save((err, userFlight)=>{
        if(err){
            return res.status(400).json({
                err: "NOT able to save user flight details in DB"+"Error is"+err
            });
        }
        res.json({
            class: userFlight.class,
            ticketNumber: userFlight.ticketNumber,
            numberOfPassengers: userFlight.numberOfPassengers
        })    
    });

}
exports.getCurrentFlights = (req,res) => {}
exports.getUserById = (req,res) => {}


