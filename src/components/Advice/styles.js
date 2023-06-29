import styled from "styled-components";


const StyledCard = styled.div`

    position: relative;
    width: 540px;
    height: 332px;

    background-color: #4F5D74;
    padding: 14px;
    border-radius: 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;

const StyledId = styled.p`

    color: #53FFAA;
    font-size: 16px;
    letter-spacing: 6px;
    
`;

const StyledAdvice = styled.p`

    color:  white;
    text-align: center;
    font-size: 32px;
   
`;
const StyledDice = styled.button`

    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #53FFAA;
    bottom: -32px;
    left: 240px;
`;



export {StyledId,StyledCard,StyledAdvice,StyledDice };