
import styled from "styled-components";

const NumberSelect = ({setError,error,selectNo,setSelectNo}) =>{
    const array = [1,2,3,4,5,6];

    const numberSelectorHandler =(value)=>{
        setSelectNo(value);
        setError("");
    };

    return(
 <NumberContainer>
    <p className="error">{error}</p>
    <div className="upperportion">

        {array.map((value,i) =>(
            <Box 
            isSelected = {value ===selectNo} 
            key={i} 
            onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))}
       
    </div>
    <p>Select Any One Number And Match With Your Dice</p>
 </NumberContainer>
    );
};
export default NumberSelect;

const NumberContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.upperportion{
    display: flex;
    gap:20px;
}
p{
    font-size: 20px;
    font-weight: 700px;
}

.error{
    color: #a2d71c;
}
`;

const Box = styled.div`
    height:60px;
    width: 60px;
    border: 1px solid black;
    display: grid;
    place-content:center;
    font-size: 20px;
    font-weight: 700;
    background-color: ${(props)=> (props.isSelected ? "black" : "white")};
    color: ${(props)=> (props.isSelected ? "white" : "black")};
`;