import Creature from './Creature.jsx';
import { useState,useEffect } from 'react';

function CreatureField() {
    const [background, setBackground] = useState( '#6b8c66');
    const [isSleeping, setIsSleeping] = useState([false, false, false, false, false]);
    

    const creatureData =[
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: background
    };
    
    useEffect(() => {
      
        
        const allSleeping = isSleeping.every(status => status === true);
    
        if (allSleeping) { 
          setBackground("#0000FF"); 
          console.log("All creatures are sleeping"); 
        } else {
          
          setBackground('#6b8c66'); 
        } 
    },[isSleeping]);
   

    return (
        <div style={fieldStyle}>
            {creatureData.map((creature, index) => (
                <Creature
                    key={creature.id}
                    name={creature.name}
                    age={creature.age}
                    sleepImageUrl={creature.sleepImageUrl}
                    awakeImageUrl={creature.awakeImageUrl}
                    x={creature.x} y={creature.y}
                    isSleeping={isSleeping[index]}
                    onAutoSleep={(isSleeping2) => {
                        const newIsSleeping = [...isSleeping];
                        newIsSleeping[index] = isSleeping2;
                        setIsSleeping(newIsSleeping);
                    }}
                />
            ))} 
        </div>
    );
}

export default CreatureField;
