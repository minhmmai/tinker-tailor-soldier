import React from 'react';
import styled from 'styled-components';

import {Heading2} from '../assets/mixins';
import bgImage from '../assets/images/card.jpg';
import Button from '../components/UI/Button';

const StyledHome = styled.div`
    background: url(${bgImage});
    background-size: cover;
    background-position: top left;
    height: 100vh;

    .card{
        background-color: white;
        border-radius: 0 5em;
        border: .5em solid lightskyblue;
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
            ${Heading2}
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
                <Button>Learn More</Button>
            </div>
        </StyledHome>
    )
};

export default Home;