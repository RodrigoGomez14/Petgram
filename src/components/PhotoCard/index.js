import React , {useState,useEffect,useRef}from 'react'
import {ImgWrapper,Img,Button,Article} from './styles'
import {MdFavoriteBorder,MdFavorite} from 'react-icons/md'
const DEFAULT_IMAGE ="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

function useLocalStorage(key ,initialValue){
    const [storedValue,setValue]=useState(()=>{
        try{
            const item = window.localStorage.getItem(key)
            return item !== null? JSON.parse(item) : initialValue
        }
        catch(e){
            return initialValue
        }
    })

    const setLocalStorage = value =>{
        try{
            window.localStorage.setItem(key,JSON.stringify(value))
            setValue(value)
        }
        catch(e){
            console.error(e)
        }
    }
    return [storedValue,setLocalStorage]
}

export const PhotoCard = ({id, likes=0,src=DEFAULT_IMAGE})=>{
    const ref = useRef(null)
    const [show,setShow] =useState(false)
    const key = `like-${id}`
    const [liked,setLiked] = useLocalStorage(key,false)
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
    const Icon = liked? MdFavorite : MdFavoriteBorder
    return(
        <Article ref={ref}>
            {show &&
            <>
                <a href={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} alt=""/>
                    </ImgWrapper>
                </a>
                <Button liked={liked} onClick={e=>{
                    setLiked(!liked)
                }}>
                    <Icon size='32px'/>
                    {likes} likes!
                </Button>
            </>
            }
        </Article>
    )
}