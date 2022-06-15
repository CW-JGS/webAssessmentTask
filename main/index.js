const $ = (Element) => document.querySelector(Element);
const rolls = $(".rolls")
const diceNum = $(".diceNum");
const total = $(".total");
const average = $(".average");
var diceValues = []
const rollDie = () => rnd = Math.floor(Math.random() * 6) + 1
   

const rollDice = () => {
    // console.log(rollDie())
    let dN = diceNum.value;
    // console.log(dN);
    try {
        if(diceValues.length === 20)
        reset();
        if(dN >20)
        throw new Error("incorrect input value")
        setTimeout(()=> 
        {
            for(let i =0; i < dN; i++)
            {
                setTimeout(()=> {
                    diceValues.push(rollDie())
                    rolls.innerText = diceValues.toString();
                    totalDice()
                    averageDice()
                }, i*1000)
            }
        }
        , dN*1000 )
    } catch (err) {
        console.error(err)    
    }
    diceNum.value = ""
}
const totalDice = () => {
    let totaldie =  diceValues.reduce((prev, curr)=> prev += curr);
    total.innerText = totaldie;
    return totaldie;

}
const averageDice = () => {
    average.innerText = totalDice()/diceValues.length; 
}
const reset = () => {
    diceValues = [];
    rolls.innerText = diceValues.toString()
    total.innerText = 0;
    average.innerText = 0;
}
