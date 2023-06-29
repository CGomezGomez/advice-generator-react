import { useEffect, useState } from "react";
import { StyledAdvice, StyledCard, StyledId, StyledDice } from "./styles";

const AdviceGenerator = () => {
    const [generator,setGenerator] = useState({});

    useEffect(()=>{
        fetchData(setGenerator);
    },[]);

	return (
	<>
	
            <StyledCard>

                <StyledId>ADVICE {generator.id}</StyledId>

                <StyledAdvice>{generator.advice}</StyledAdvice>
                
                <img src="/images/pattern-divider-mobile.svg" alt="" />

                <StyledDice onClick={()=>fetchData(setGenerator)}>
                     <img src="/images/icon-dice.svg" alt="" />
                </StyledDice>

            </StyledCard>
       
	</>
	);
};

const fetchData = async(setGenerator) =>{
    const response = await fetch('	https://api.adviceslip.com/advice');
    const data = await response.json();
    setGenerator(data.slip);
};

export default AdviceGenerator;
