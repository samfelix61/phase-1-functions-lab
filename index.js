// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns - 42;
    if (someValue > 42)
    {return someValue - 42}
    else {
        return 42 - someValue
    }
      }

      function distanceFromHqInFeet(someValue){
        distanceFromHqInBlocks(someValue);
        return distanceFromHqInBlocks(someValue) * 264;
    }
    function distanceTravelledInFeet(start, destination){
     if( start > destination){
        return ( start - destination) * 264;
     }else{
        return (destination - start) * 264;
         }
    }
    function calculatesFarePrice(start, destination){
        distanceTravelledInFeet(start, destination);
        if(distanceTravelledInFeet(start, destination) <= 400){
            return 0;
        }
        else if(distanceTravelledInFeet(start, destination) > 
        400 && distanceTravelledInFeet(start, destination) <= 2000){
           return (distanceTravelledInFeet(start, destination) - 400) * 0.02
        }
        else if(distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) <= 2500){
            return 25;
        }else{
            return "cannot travel that far";
        }
    };