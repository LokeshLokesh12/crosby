import React,{Fragment,useEffect} from 'react'
function Header() {

useEffect(() => {
    let offset = 0;
    window.addEventListener('scroll',()=>{
    let header = document.getElementById('header');
    let scroll = window.pageYOffset;
    if(offset > scroll){
        console.log('scroll up')
        header.style.opacity = 1
        offset = scroll;
    }
    else if(offset < scroll){
        console.log('scroll down')
        header.style.opacity = 0
        offset = scroll;
    }
    })
},[])

    return (
    <Fragment>
        <header id="header">
        <div className="left">
            <h1>Crosby</h1>
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
    </header>
    </Fragment>
  )
}

export default Header