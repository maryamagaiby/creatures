import React, {useState} from 'react';

function Creature(props) {
    const [isSleeping, setIsSleeping] = useState(false);
    const [initialX, setX] = useState(props.x);
    const [initialY, setY] = useState(props.y);
    

    const style = {
        position: 'absolute',
        left: initialX+ 'px',
        top: initialY+ 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };
    function handleModeChange() {
        setIsSleeping(!isSleeping);
        setX(Math.floor(Math.random() * 200));
        setY(Math.floor(Math.random() * 200));
    }
    

    return (
        <div style={style}>
            <img onClick={ handleModeChange
                
             } src={isSleeping? props.awakeImageUrl : props.sleepImageUrl} alt={props.name} width="120" />
             props.x=Math.floor(Math.random() * max); 
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;