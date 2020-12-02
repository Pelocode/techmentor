import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Input = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    width: 100%;
    border: 1px solid #a3a3a3;
    border-radius: 50px;

    input{
        border: none;
        padding: 10px 26px;
        width: 100%;

        & + input {
            margin-top: 10px;
        }
    }

    & + div {
        margin-top: 25px;
    }

    svg {
        color: #a3a3a3;
    }

    /* ${props => props.isFocused && css `
        border: 1px solid #00A3FF;
        svg {
            color: #00A3FF;
        }
    `} */
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    place-content: center;
    align-items: center;
    justify-items: center;

    background-color: #fff;

    padding: 0 60px;
    height: 100vh;
    max-width: 700px;
    width: 100%;

    p {
        margin-bottom: 50px;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
        margin-left: 35px;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;

        border-radius: 10px;

        padding: 55px 40px;
        -webkit-box-shadow: 0px 10px 23px 3px rgba(0,0,0,0.20);
        -moz-box-shadow: 0px 10px 23px 3px rgba(0,0,0,0.20);
        box-shadow: 0px 10px 23px 3px rgba(0,0,0,0.20);

        img {
            margin-bottom: 10px;
        }

        h3 {
            text-align: center;
            margin-bottom: 25px;
        }

        label {
            margin-top: 10px;
        }

        button {
            background-color: #00A3FF;
            border: none;
            padding: 14px 18px;
            width: 100%;
            color: white;
            margin-top: 20px;
            font-weight: 700px;
            border-radius: 50px;
        }

        a {
            margin-top: 10px;
            text-align: center;
            text-decoration: none;
            color: #151515;
        }
    }

`;
export const Background = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    padding: 30px;

`;

