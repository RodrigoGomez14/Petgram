import styled, {css} from 'styled-components'
import {appearsFromTop} from '../../styles/animation'
export const List = styled.ul`
    display:flex;
    overflow:scroll;
    width:100%;
    margin-bottom:10px;
    ${props=>props.fixed && css`
    {
        background:#fff;
        border-radius:60px;
        box-shadow: 0 0 20px rgba(0,0,0,.3);
        max-width:400px;
        padding: 5px;
        position:fixed;
        right:0;
        left:0;
        margin:0 auto;
        top:-20px;
        transform:scale(.5);
        z-index:1;
        transition: .5s;
        ${appearsFromTop}
    }` 
    }
`
export const Item = styled.li`
    padding:0 8px
`