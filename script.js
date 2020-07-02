let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById('match');

const shapes = [
    {color: '#FF595E', width: 250, height: 210},
    {color: '#FF595E', width: 250, height: 160},
    {color: '#FF495E', width: 280, height: 360},
    {color: '#FF595E', width: 260, height: 260},
    {color: '#FF595E', width: 230, height: 190},
    {color: '#FF295E', width: 200, height: 160},
    {color: '#FA595E', width: 350, height: 180},
    {color: '#FF595E', width: 150, height: 360},
    {color: '#FF555E', width: 250, height: 160},
]

const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    const randomSelection = shapes[randomNum];
    return(randomSelection);
}

const repeatRandomShape = () => {
    setInterval(() => {
        matchBtn.disabled = false;

        shape1 = selectRandomShape();
        shape2 = selectRandomShape();
        console.log(shape1);
        console.log(shape2);

        const shape1Styles = `width:${shape1.width+'px'};
                              height:${shape1.height+'px'};
                              background:${shape1.color};`

        const shape2Styles = `width:${shape2.width+'px'};
                                height:${shape2.height+'px'};
                                background:${shape2.color};`

        document.getElementById('shape1').style.cssText = shape1Styles;
        document.getElementById('shape2').style.cssText = shape2Styles;
    }, 1000);
}

//Start game with button.
document.getElementById('play').onclick = () => {

    playing = true;
    document.getElementById('play').disabled = true;
    repeatRandomShape();
    
}

document.getElementById('match').onclick = () => {
    matchBtn.disabled = true;

    if (playing) {
        if(Object.is(shape1, shape2)){
            currentScore++;
            document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        }
    }
}
