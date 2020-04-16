import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

*{
    padding: 0;
    margin: 0;
}

body{
    background-color: ${props => props.theme.mode === 'dark' ? '#1d1d1d' : '#fff'};
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#1d1d1d'};
    font-family: 'Fira Code', monospace;

}

a:hover{
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#1d1d1d'};
}
`