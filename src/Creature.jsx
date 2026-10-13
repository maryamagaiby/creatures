import  {useState} from 'react';

/*the creature state up to CreatureField as an array of creature objects. CreatureField passes each creature's data as props to the Creature components and passes an onWake callback for state updates.
Implement at least one of the following feature that requires the lifted state:
- Show "X of 5 creatures awake" summary in CreatureField
- Change the CreatureField background color when all creatures are awake or all are asleep
- Add a "Wake all" / "Let all sleep" button in CreatureField that toggles all creatures at once
Submission (one submission per group)
One member of the group submits the files on Moodle on behalf of the whole group. Name the zip file with everyone's names.
Submit a ZIP file containing: Your entire project folder WITHOUT node_modules folder and a pdf with URL of your repo and screenshot of the app showing at least one creature awake.*/

/*const CreatureField = [
    {name: "Fruits", age: 1, isSleeping: true, awakeImageUrl: "creatures/public/images/first_awake.png", sleepImageUrl: "creatures/public/images/first_sleep.png", x: 120, y: 140},
    {name: "Fruits", age: 1, isSleeping: true, awakeImageUrl: "creatures/public/images/second_awake.png", sleepImageUrl: "creatures/public/images/second_sleep.png", x: 120, y: 140},
    {name: "Fruits", age: 1, isSleeping: true, awakeImageUrl: "creatures/public/images/third_awake.png", sleepImageUrl: "creatures/public/images/third_sleep.png", x: 120, y: 140},
    {name: "Fruits", age: 1, isSleeping: true, awakeImageUrl: "creatures/public/images/fourth_awake.png", sleepImageUrl: "creatures/public/images/fourth_sleep.png", x: 120, y: 140},
    {name: "Fruits", age: 1, isSleeping: true, awakeImageUrl: "creatures/public/images/fifth_awake.png", sleepImageUrl: "creatures/public/images/fifth_sleep.png", x: 120, y: 140},
    
  ];*/
 
  

function Creature(props) {
    //const [isSleeping, setIsSleeping] = useState(false);
    const [position, setPosition] = useState({ x: props.x, y: props.y });

    const style = {
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };


    const handleClick = () => {
        props.onAutoSleep(!props.isSleeping);
        setPosition({ x: Math.floor(Math.random() * 500), y: Math.floor(Math.random() * 500) });
    }

    return (
        <div style={style}>
            <img onClick={handleClick} src={props.isSleeping? props.awakeImageUrl : props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;