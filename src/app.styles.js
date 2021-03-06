import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { black } from './colors/colors'

export const NinjaLogo = styled.img`
    height: 50px;
    width: 50px;
`

export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
`

export const StyledChakraBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
`
export const ParentContainer = styled.div`
    display: flex;
    border: 1px solid black;
    height: min-content;
`
export const MainPage = styled.div`
    background-color: ${black};
    flex: 1;
`
export const NinjaBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    height: 93vh;
`

export const NinjaBackgroundLogo = styled.img`
    height: 12.5rem;
    width: 12.5rem;
    opacity: 0.5;
`

export const CartIcon = styled.img`
    height: 2rem;
    width: 2rem;
    cursor: pointer;
`