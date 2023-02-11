import React,{Fragment} from "react";
import '../App.css'
import Header from "./Header";
import Footer from "./Footer";
function Shop() {
  return (
    <Fragment>
        <Header/>
        <div className="shop">
            <div className="shop-content">
                <h1>Our Plants</h1>
                <p>Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.</p>
                <ul>
                    <li>
                        <a href="/products?id=1">
                            <img src="./images/Ecomm_02_Lily_004.jpg" loading='lazy' alt="Lil' Guys"/>  
                            <h2>Lil' Guys</h2>
                            <p>from $25.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=2">
                            <img src="./images/image.jpg" loading='lazy' alt="Pencil Plant"/>
                            <h2>Pencil Plant</h2>
                            <p>from $12.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=3">
                            <img src="./images/image (1).jpg" loading='lazy' alt="Alocasia"/>
                            <h2>Alocasia</h2>
                            <p>from $15.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=4">
                            <img src="./images/Ecomm_17_Snake_001.jpg" loading='lazy' alt="Snake"/>
                            <h2>Snake</h2>
                            <p>from $12.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=5">
                            <img src="./images/Ecomm_18_Palm_004.jpg" loading='lazy' alt="Palm"/>
                            <h2>Palm</h2>
                            <p>from $30.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=6">
                            <img src="./images/Ecomm_04_Orchid_005.jpg" loading='lazy' alt="Orchid"/>
                            <h2>Orchid</h2>
                            <p>from $30.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=7">
                            <img src="./images/Ecomm_03_CalatheaPink_006.jpg" loading='lazy' alt="Calathea Pink"/>
                            <h2>Calathea Pink</h2>
                            <p>from $10.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=8">
                            <img src="./images/Ecomm_13_MaidenHair_006.jpg" loading='lazy' alt="Maiden Hair"/>
                            <h2>Maiden Hair</h2>
                            <p>from $25.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=9">
                            <img src="./images/Ecomm_16_Cactus2_005.jpg" loading='lazy' alt="Cactus"/>
                            <h2>Cactus</h2>
                            <p>from $50.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=10">
                            <img src="./images/Ecomm_07_Fern_003.jpg" loading='lazy' alt="Fern"/>
                            <h2>Fern</h2>
                            <p>from $25.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="/products?id=11">
                            <img src="./images/giftcard-template.jpg" loading='lazy' alt="giftcard"/>
                            <h2>giftcard</h2>
                            <p>from $25.00</p>
                        </a>
                    </li>
                </ul>   
            </div>
        </div>
        <Footer/>
    </Fragment>
    )
}
export default Shop