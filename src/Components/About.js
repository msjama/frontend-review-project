import React from "react";
import styled from "styled-components";


function About () {
return (
      <>
    <WelcomeMessage >
          Welcome to Mohamed's Portfolio
    </WelcomeMessage>
      </>


)




}

export default About;

const WelcomeMessage = styled.h3`
padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
`;