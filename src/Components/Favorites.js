import React,{Fragment} from 'react'
function Favorites() {
  return (
      <Fragment>
        <div className="Favorites">
        <h1>fans Favorites</h1>
        <ul>
            <li>
                <img src="./images/image.jpg" alt=""/>
                <h2>Lil' Guys</h2>
                <a href="/products?id=2">buy now</a>
            </li>
            <li>
                <img src="./images/image (1).jpg" alt=""/>
                <h2>Bigger Statements</h2>
                <a href="/products?id=3">buy now</a>
            </li>
            <li>
                <img src="./images/Ecomm_02_Lily_004.jpg" alt=""/>
                <h2>Low Maintenance</h2>
                <a href="/products?id=1">buy now</a>
            </li>
        </ul>
    </div>
      </Fragment>
    )
}
export default Favorites