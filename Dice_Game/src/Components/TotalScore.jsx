import styled from "styled-components";


const TotalScore = ({score}) =>{
    return(
        <ScoreCon>
          <h1>{score}</h1>
          <p>Total Score</p>
    </ScoreCon>
    );
};
export default TotalScore;

const ScoreCon = styled.div`
max-width: 200px;
text-align: center;

h1{
    font-size: 100px;
    line-height: 80px;
}
p{
    font-size:  24px;
    font-weight: 500;
}

`;
