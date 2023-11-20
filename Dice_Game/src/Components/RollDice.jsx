
import styled from "styled-components";

const RollDice = ({DiceRoll,currentDice})=>{

    

  
    return(
        <DiceSection>
            <div className="DiceControl"
            onClick={DiceRoll}>
              <img src={`/images/Dice/side_${currentDice}.png`}/>
            </div>
            <p>Click on Dice to roll</p>
        </DiceSection>
    );
};
export default RollDice;

const DiceSection = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;

.DiceControl{
    cursor: pointer;
}
img{
    height: 100px;
    width: 100px;
}
`;