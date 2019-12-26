import {css,keyframes} from 'styled-components'

export const fadeIn = ({time='1s',type='ease'}={})=>css`
    animation: ${time} ${fadeInKeyframes} ${type};
`
const fadeInKeyframes = keyframes`
from{
    filter:blur(5px);
    opacity:0
}
to{
    filter: blur(0px);
    opacity:1
}`

export const appearsFromTop = ({time='1s',type='ease'}={})=>css`
    animation: ${time} ${appearsFromTopKeyframes} ${type};
`
const appearsFromTopKeyframes =keyframes`
from{
    top:-100px;
    transform: scale(0)
}
to{
    top: -20px;
}
`

