import React from 'react';
import styled from 'styled-components';

import breakpoints from '../assets/breakpoints';
import { Heading2 } from '../assets/mixins';
import bgImage from '../assets/images/coins.jpg';
import Button from '../components/UI/Button';

const StyledHome = styled.div`
    background: linear-gradient(rgba(100, 98, 98, 0.45), rgba(158, 245, 180, 0.45)), url(${bgImage});
    background-size: cover;
    background-position: top left;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .card{
        background-color: white;
        border-radius: 0 5em;
        border: .5em solid lightskyblue;
        color: black;
        display: flex;
        flex-direction: column;
        width: 50em;
        padding: 2em;
        text-align: left;
        
        h2{
            ${Heading2}
        }
    }

    @media ${breakpoints.device.xs} {
        .card {
            width: 100vw;
        }
    }
    @media ${breakpoints.device.sm} {
        .card {
            width: 100vw;
        }
    }
    @media ${breakpoints.device.md} {
        .card {
            width: 75vw;
        }
    }
    @media ${breakpoints.device.lg} {
        .card {
            width: 50vw;
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
                    Check out our new rage of credit cards. From low-rate to low-fee and anything in between, we've got you covered!
                </p>
                <Button>Learn More</Button>
            </div>
        </StyledHome>
    )
};

export default Home;