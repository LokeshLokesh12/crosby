import React,{Fragment} from "react";
// import Header from "./Header";
function Journal() {
  return (
    <Fragment>
        {/* <Header/> */}
        <div className="journal">
        <h1>the journal</h1>
        <ul>
            <li>
                <img src="./images/plant_2_optimized.gif" alt=""/>
                <h2>Is It Flowers You’re After?</h2>
                <p>Flowering plants are stunning, but require a bit more work than their non-flowering brethren. Learn how to keep...</p>
                <a href="/journal-info?id=1">Read more...</a>
            </li>
            <li>
                <img src="./images/plant_1_optimized.gif" alt=""/>
                <h2>Searching for Succulents?</h2>
                <p>If you have a sunny windowsill, you can be a succulent owner. These hardy and beautiful plants are as easy...</p>
                <a href="/journal-info?id=2">Read more...</a>
            </li>
        </ul>
    </div>
    </Fragment>
  )
}
export default Journal