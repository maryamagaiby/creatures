import React, {useState} from 'react';

function Creature(props) {
    const [isSleeping, setIsSleeping] = useState(false);
    const [position, setPosition] = useState({ x: props.x, y: props.y });

    const style = {
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    const handleClick = () => {
        setIsSleeping(!isSleeping);
        setPosition({ x: Math.floor(Math.random() * 500), y: Math.floor(Math.random() * 500) });
    }

    return (
        <div style={style}>
            <img onClick={handleClick} src={isSleeping? props.awakeImageUrl : props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;