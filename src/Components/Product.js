import React,{Fragment} from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../App.css'
import { useSearchParams } from 'react-router-dom'
function Product() {
    
    const  [param] = useSearchParams();
    let _id = param.get('id')
    console.log(_id);

    let arr =[
        {
        id : 1,
        img : './images/Ecomm_02_Lily_004.jpg',
        name:"lily",
        price: 25,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
        
    },
        {
        id : 2,
        img : './images/image.jpg',
        name:"Pencil Plant",
        price: 15,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
        {
        id : 3,
        img : './images/image (1).jpg',
        price: 15,
        name:'Alocasia',
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
        {
        id : 4,
        name:'Snake',
        img : './images/Ecomm_17_Snake_001.jpg',
        price: 12,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]

        
    },
        {
        id : 5,
        img :'./images/Ecomm_18_Palm_004.jpg',
        price: 30,
        name:'Palm',
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]

    },
        {
        id : 6,
        img :'./images/Ecomm_04_Orchid_005.jpg',
        price: 30,
        name:'Orchid',
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]

    },
        {
        id : 7,
        img : './images/Ecomm_03_CalatheaPink_006.jpg',
        name:'Calathea Pink',
        price: 10,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
        {
        id : 8,
        img : './images/Ecomm_13_MaidenHair_006.jpg',
        name:'Maiden Hair',
        price: 25,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
        
    },
    {
        id : 9,
        img : './images/Ecomm_16_Cactus2_005.jpg',
        price: 50,
        name:'Cactus',
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
    {
        id : 10,
        img : './images/Ecomm_07_Fern_003.jpg',
        price: 25,
        name:'Fern',
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
    {
        id : 11,
        img : './images/giftcard-template.jpg',
        name:'Gift Card',
        price: 25,
        description:[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum atque officiis veniam similique eaque aliquam tempora id deserunt nisi itaque, unde repudiandae alias voluptatibus fuga quam eligendi! Eveniet, neque.'
        ]
    },
]

let newArray = arr.filter((data)=>{
    console.log( typeof(data.id));
    console.log( typeof(_id));
    return(
        data.id === Number(_id) 
        )
    })
    console.log(newArray);
    
    console.log(arr);
    return (
        <Fragment>
        <Header/>
            {/* <div className="product-body">
                <div className="product-container">
                    <img src="./images/Ecomm_02_Lily_004.jpg" alt="" />
                    <div className="product-content">
                        <h1>lilly</h1>
                        <p>Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!</p>
                        <p>Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!</p>
                        <a href="/" className="btn">Buy Now</a>
                    </div>
                </div>
            </div> */}
            {
                newArray.map((data)=>{
                    return(
                        <div className="product-body">
                            <div className="product-container">
                                <img src={data.img} loading='lazy' alt={data.name} />
                                <div className="product-content">
                                    <h1>{data.name}</h1>
                                    <div className="sip">
                                        {
                                            data.description.map((info)=>{
                                                return <p>{info}</p>
                                            })
                                        }
                                    </div>
                                    <a href="/" className="btn">Buy Now - ${data.price}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        <Footer/>    
   </Fragment>
  )
}
export default Product