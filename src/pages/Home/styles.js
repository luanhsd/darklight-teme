import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const Title = styled.h1`
    color: rgb(63,81,181);
`

export const Links = styled.div`
    color: grey;


    & a {
        color: grey;
    }
`

export const Text = styled.div`
    padding: 5%;
`

export const AvatarStyled = styled(Avatar)`
    height: 20% !important;
    width: 20% !important;
    margin: 5%;
`