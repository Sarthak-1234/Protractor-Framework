import {Before} from "cucumber";

Before({tags:"@demo"}, function(){
    console.log("I am Before of demo tag");
})