import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'DungGeunMo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DungGeunMo', sans-serif;
    }
    
    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
