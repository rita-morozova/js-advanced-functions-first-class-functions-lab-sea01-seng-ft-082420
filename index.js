const returnFirstTwoDrivers = function(drivers){
 return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
  return function(fare){
    return fare * int
  }
}
const fareDoubler= createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnedResult){
  return returnedResult(drivers)
}