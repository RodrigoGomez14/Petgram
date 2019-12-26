import React , {useState,useEffect,useRef}from 'react'
import {ImgWrapper,Img,Button,Article} from './styles'
import {MdFavoriteBorder} from 'react-icons/md'
const DEFAULT_IMAGE ="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({id, likes=0,src=DEFAULT_IMAGE})=>{
    const ref = useRef(null)
    const [show,setShow] =useState(false)
    useEffect(function(){
        const observer = new window.IntersectionObserver(entries=>{
            const {isIntersecting}=entries[0]
            if(isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    },[ref])
    return(
        <Article ref={ref}>
            {show &&
            <>
                <a href={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} alt=""/>
                    </ImgWrapper>
                </a>
                <Button>
                    <MdFavoriteBorder size='32px'/>
                    {likes} likes!
                </Button>
            </>
            }
        </Article>
    )
}