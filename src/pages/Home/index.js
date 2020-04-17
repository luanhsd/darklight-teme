import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate'
import Header from '../../components/Header'
import { Grid, Container } from '@material-ui/core'
import Xpeer from '../../assets/luandantas.jpg'
import { Title, Links, Text, AvatarStyled } from './styles'

export default function Home() {
    const [theme, setTheme] = useState({ mode: 'light' })


    return (
        <MainTemplate theme={theme}>
            <Header setTheme={() => setTheme(theme.mode === 'dark' ?
                { mode: 'light' } : { mode: 'dark' }
            )} />
            <Grid container justify="center" alignItems="center">
                <AvatarStyled alt="XpeeR" src={Xpeer} />
            </Grid>
            <Title>XpeeR</Title>
            <h4>Software Engineer | Full Stack Developer</h4>
            <Links>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luandantas/">LinkIn</a> |
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/luanhsd">GitHub</a> |
                <a target="_blank" rel="noopener noreferrer" href="http://lattes.cnpq.br/3333491060943233"> Lattes</a>
            </Links>
            <Container>
                <Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis auctor enim. Nullam quam orci, iaculis at justo ac, aliquam aliquet ante. Donec ut dapibus dui. Etiam eros ante, lobortis eu tortor eget, vestibulum vulputate dolor. Nullam ac pharetra massa. Nunc cursus maximus ornare. Ut at eros lectus. In at venenatis tellus. Nam dui leo, iaculis auctor ipsum id, sagittis tempus quam.</p>

                    <p>Vestibulum quis dictum odio. Donec vitae porttitor risus. Sed id vestibulum elit, in egestas magna. In dapibus lacus sed nisi aliquam tincidunt. Mauris iaculis erat justo, quis sollicitudin metus maximus quis. Mauris elementum velit ut velit consequat finibus. Nunc sagittis sodales eros, vitae feugiat nunc sodales sit amet. Donec lectus felis, venenatis eget dapibus ut, mollis hendrerit leo. Nam ultrices, enim mattis consequat ultrices, ipsum tortor vestibulum lectus, mattis efficitur metus sapien nec leo. Ut molestie, tortor eu condimentum porttitor, lectus ligula vestibulum dui, vel pellentesque neque ligula ullamcorper leo. Suspendisse ullamcorper ut quam efficitur interdum. Maecenas non ligula ultricies, malesuada lectus blandit, auctor diam.</p>

                    <p>Nunc pretium, dui in sollicitudin ultrices, ligula dui aliquet purus, eu pellentesque quam nulla sit amet nibh. Praesent sed placerat tortor. Morbi volutpat tortor odio, nec egestas ante placerat nec. Donec consequat tincidunt lorem, ac luctus dui. Maecenas dictum nulla eget libero dictum, ut porta magna faucibus. Ut eu molestie tortor, et iaculis dolor. Sed lobortis aliquam mi sed fringilla. Donec in euismod metus. Praesent et pulvinar tortor. Proin arcu odio, tristique ut est et, laoreet rutrum mi. Quisque finibus placerat risus vel lobortis. Etiam eget accumsan neque. Proin quis lectus ex. Cras in mauris leo. Morbi blandit non ante sit amet placerat.</p>

                    <p>Nam suscipit, quam eu rhoncus rutrum, mauris neque convallis orci, eget bibendum felis ligula nec nisi. Ut id mauris tempus ante sagittis placerat. Integer vel nisi non ipsum finibus lobortis interdum vel magna. Morbi tempus leo in pellentesque posuere. Nam tempor ac tortor eu dignissim. Aliquam urna odio, scelerisque vitae ligula vitae, dapibus tempor risus. Aenean ipsum ligula, sollicitudin ut diam nec, interdum tempus turpis. Quisque volutpat blandit sem nec lobortis. Phasellus iaculis mi et felis malesuada eleifend. Donec finibus justo eu elit ultricies congue. Curabitur ligula felis, molestie sit amet metus sit amet, commodo finibus odio. Donec aliquet justo id mauris ullamcorper congue. Etiam mollis tortor egestas, dapibus tellus id, fermentum est. Donec vitae ex vel nisi dapibus sagittis. Nulla facilisi.</p>
                </Text>
            </Container>
        </MainTemplate>
    );
}
