import React,{Fragment,useEffect} from 'react'
import ResponseNav from './ResponseNav';
function Header() {
useEffect(() => {
    let offset = 0;
    window.addEventListener('scroll',()=>{
    let header = document.getElementById('header');
    let scroll = window.pageYOffset;
    if(offset > scroll){
        console.log('scroll up')
        // header.style.opacity = 1
        header.style.display = 'flex'
        offset = scroll;
    }
    else if(offset < scroll){
        console.log('scroll down')
        // header.style.opacity = 0
        header.style.display = 'none'
        offset = scroll;
    }
    })

    let menu = document.getElementById('menu');
    let ResponseNav = document.getElementById('ResponseNav')
    menu.addEventListener('click',()=>{
        ResponseNav.classList.toggle('ResponseNav_visible')
        if(ResponseNav.classList.contains('ResponseNav_visible')){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }
        
    })
    window.addEventListener('resize',()=>{ 
        ResponseNav.classList.remove('ResponseNav_visible')  
        document.body.style.overflow = 'auto'

    })
},[])

    return (
    <Fragment>
            <header id="header">
            <div className="left">
                <a href="/">
                    <h1>Crosby</h1>
                </a>
            </div>
            <div className="center">
                <ul>
                    <li><a href="/shop">shop</a></li>
                    <li><a href="/ourstory">our story</a></li>
                    <li><a href="/journal">journal</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
            <i className="fa-sharp fa-solid fa-bars" id='menu'></i>
            </header>
           
        <ResponseNav/>
    </Fragment>
  )
}

export default Header