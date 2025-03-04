// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(hqLocation - someValue)
}
console.log(distanceFromHqInBlocks(3))
function distanceFromHqInFeet(start) {
    //Removed the destination parameter because it was defined in the previous fn
    return distanceFromHqInBlocks(start) * 264
}
console.log(distanceFromHqInFeet(43));
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}
function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination)
    if (feetTravelled <= 400) {
        return 0
    }
    else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled-400) * .02
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25
    } else{
        return 'cannot travel that far';
    }
}