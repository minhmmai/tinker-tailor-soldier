import React from 'react';
import styled from 'styled-components';

import bgImage from '../assets/images/card.jpg';

const StyledHome = styled.div`
    background: url(${bgImage});
    background-size: cover;
    background-position: top;
    height: 100vh;

    .card{
        background-color: white;
        border-radius: 0 5em;
        border: 1em solid lightskyblue;
        color: black;
        display: flex;
        flex-direction: column;
        width: 30em;
        padding: 2em;
        text-align: left;
        position: absolute;
        top: 50vh;
        left: 25vw;
        transform: translate(-50%, -50%);
        
        h2{
            color: black;
            font-size: 3em ;
            width: 100%;
        }

        .callToAction{
            align-self: flex-end;
            border: none;
            border-radius: 1em 0;
            background-color: lightskyblue;
            padding: 1em 2em;
        }
    }
`;

const Home = () => {
    return (
        <StyledHome>
            <div className="card">
                <h2>
                    New to React Bank?
                </h2>
                <p>
                    Check out our new rage of credit cards. From low-rate to low-fee, we've got you covered!
                </p>
                <button className="callToAction">Learn More</button>
            </div>
        </StyledHome>
    )
};

export default Home;