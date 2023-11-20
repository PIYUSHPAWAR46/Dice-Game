import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";
import { Button, OutlineButton } from "../styledbtn/Button";

const GamePlay = () =>{

    const [score,setScore]= useState(0);
    const [selectNo, setSelectNo] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const RandomNumbergen = (min, max)=>{

        return Math.floor(Math.random() * (max-min +1) + min);
    };

    const DiceRoll = ()=>{

        if(!selectNo) {
            setError("you have not selected any number");
            return;
        }
    

        const RandomNo = RandomNumbergen(1,6);
        setCurrentDice((prev) => RandomNo);

        if(selectNo ===RandomNo){
            setScore((prev) => prev+RandomNo);
        }
        else{
            setScore((prev) => prev-2);
        }

        setSelectNo(undefined);

    };

    const resetScore = () => {
        setScore(0);
      };

    return(
     <Main>
        <div className="topSection">
            <TotalScore score={score}/>
            <NumberSelect
            error = {error}
            setError={setError}
            selectNo={selectNo}
            setSelectNo={setSelectNo}/>
        </div>
            <RollDice
            currentDice={currentDice}
            DiceRoll={DiceRoll}/>

           <div className="Twobtns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
     </Main>
    )
};
export default GamePlay;

const Main = styled.div`
padding-top: 0px;


.topSection{

    display: flex;
    align-items: end;
    justify-content:space-around;
}

.Twobtns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

`;
