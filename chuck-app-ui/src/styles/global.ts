import { createGlobalStyle } from "styled-components";
import { apercu } from "./themes";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Apercu-Regular';
        box-sizing: border-box;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            height: 4px;
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: #a7a7a7;
        }
    }

    body {
        font-size: 62.5%;
        --webkit-font-smoothing: antialiased;
    }

    button {
        border: none;
        border-radius: 999px;
        padding: 0.4em 2.4em;
        font-family: ${apercu.light};
        transition: all ease 0.2s;
        outline: none;

        &:hover {
            transform: translateY(-0.15em);
            cursor: pointer;
        }

        &:active {
            transform: translateY(-0.05em);
        }
    }
`;
