import styled from 'styled-components';
import { Button } from "../styledbtn/Button";
const StartGame = ({toggle}) => {
    return(
        <Container>
            <div>
              <img src="/images/dice.png"/>
            </div>
            <div className='content'>
            <h1>Dice Game</h1>
            <Button
            onClick={toggle}>Play Now</Button>
            </div>
            
        </Container>
    );
};
export default StartGame;

const Container = styled.div`
    display: flex;
    height: 80vh;
    max-width: 1180px;
    margin: 0 auto;
    align-items: center;
    

.content{
    h1{
        font-size: 100px;
        white-space: nowrap;
    }
}
img{
    width: 50vw;
    height:auto;
}
`;

