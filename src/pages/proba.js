import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'


const Global=createGlobalStyle`
margin:0;
overflow-x:hidden;
`

const MenuIcon=styled.button`
position:fixed;
    top:2rem;
    right:10rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:1.5rem;
    height:1.5rem;
    background:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    z-index:5;

    div{
        width:1.5rem;
        height:.2rem;
        background:black;
        border-radius:5px;
        transform-origin:1px;
        position:relative;
        
        :first-child{
            transform: ${({nav})=> nav? "rotate(45deg)": "rotate(0)"}
        }

        :nth-child(2){
            opacity: ${({nav})=> nav? "0": "1"};
        }

        :nth-child(3){
            transform: ${({nav})=> nav? "rotate(-45deg)": "rotate(0)"} 
        }
    }
`

const MenuLinks=styled.nav`
    z-index:100;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:100vh;
    width:100%;
    background: #d7d7d7;
    position:absolute;
    top:0;
    right:0;
    transition: transform 300ms;
    transform:${({nav})=> nav? "translateX(0)": "translateX(100%)"};

ul{
    list-style-type:none;

}

li{
    margin-top:1rem;
}

a{
    text-decoration:none;
    color:black;
    font-size:1.5rem;
    transition:color 300ms;
    text-transform: uppercase;

    :hover{
        color: #6ab4ff;
    }

`


const MobileNavBar=()=>{

    const[nav, showNav]=useState(false)

    return(
        <div>
            <Global/>
            <MenuIcon nav={nav} onClick={()=>showNav(!nav)}>
                <div/>
                <div/>
                <div/>
            </MenuIcon>
            <MenuLinks nav={nav}>
            
                <ul>
                    <li>
                        <a href='/'>Početna</a>
                    </li>
                    <li>
                        <a href="/repertoire">Repertoar</a>
                    </li>
                    <li>
                        <a href="/listen">Poslušajte nas</a>
                    </li>
                    <li>
                        <a href="/gallery">Galerija</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contact">Kontakt</a>
                    </li>
                </ul>
            </MenuLinks>

        </div>
    )
}

export default MobileNavBar