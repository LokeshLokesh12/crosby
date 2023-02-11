import React,{Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSearchParams } from 'react-router-dom'
function JournalInfo() {
    
    const  [param] = useSearchParams();
    let id = param.get('id')
    console.log(id);

    let info = [{
        id:1,
        data : "jan 6",
        heading: "Is It Flowers You’re After?",
        image: "./images/plant_2_optimized.gif",
        author:"Written By Guest User",
        description:[
            {
                id:1,
                text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            },
            {
                id:2,
                text:  'Duis Autem Vel Eum Iriure Dolor In Hendrerit In Vulputate Velit Esse Molestie Consequat, Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accumsan Et Iusto Odio Dignissim Qui Blandit Praesent Luptatum Zzril Delenit Augue Duis Dolore Te Feugait Nulla Facilisi. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore Magna Aliquam Erat Volutpat.'
            },
            {
                id:3,
                text:'Ut Wisi Enim Ad Minim Veniam, Quis Nostrud Exerci Tation Ullamcorper Suscipit Lobortis Nisl Ut Aliquip Ex Ea Commodo Consequat. Duis Autem Vel Eum Iriure Dolor In Hendrerit In Vulputate Velit Esse Molestie Consequat, Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accumsan Et Iusto Odio Dignissim Qui Blandit Praesent Luptatum Zzril Delenit Augue Duis Dolore Te Feugait Nulla Facilisi.'
            }        
        ]      
    },
    {   
        id:2,
        data : "Jun 3",
        heading: "Searching for Succulents?",
        image: "./images/plant_1_optimized.gif",
        author:"Written By Guest User",
        description:[
            {
                id:1,
                text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            },
            {
                id:2,
                text:  'Duis Autem Vel Eum Iriure Dolor In Hendrerit In Vulputate Velit Esse Molestie Consequat, Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accumsan Et Iusto Odio Dignissim Qui Blandit Praesent Luptatum Zzril Delenit Augue Duis Dolore Te Feugait Nulla Facilisi. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore Magna Aliquam Erat Volutpat.'
            },
            {
                id:3,
                text:'Ut Wisi Enim Ad Minim Veniam, Quis Nostrud Exerci Tation Ullamcorper Suscipit Lobortis Nisl Ut Aliquip Ex Ea Commodo Consequat. Duis Autem Vel Eum Iriure Dolor In Hendrerit In Vulputate Velit Esse Molestie Consequat, Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accumsan Et Iusto Odio Dignissim Qui Blandit Praesent Luptatum Zzril Delenit Augue Duis Dolore Te Feugait Nulla Facilisi.'
            }        
        ]       
    }
 ]
    let displarinfo = info.filter((data)=>{
        return data.id === Number(id);
    })
    console.log(displarinfo);
  return (
    <Fragment>
        <Header/>
            <div className="journal-info">
                {
                   displarinfo.map((data)=>{
                    return(
                        <div className="" key={data.id}>
                        <p>{data.data} , {data.author}</p>
                        <h1>{data.heading}</h1>
                        <img src={data.image} alt=""/>
                        <div className="para">
                            {data.description.map((data)=>{
                                return(
                                    <p key={data.id}>
                                        {data.text}
                                    </p>
                                )
                            })
                            }
                            {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <p>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p> */}
                        </div>
                    </div> 
                    )
                   }) 
                }
              
            </div>
        <Footer/>
    </Fragment>
  )
}

export default JournalInfo