const wakeUp = () => 'Acordando!!';
const breakfest = () => 'Bora tomar café!!';
const goodNight = () => 'Partiu dormir!!' ; 

const doingThing = thingToDo => thingToDo();

console.log(doingThing(wakeUp));
