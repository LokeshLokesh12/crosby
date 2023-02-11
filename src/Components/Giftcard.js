import React,{Fragment} from "react";
function Giftcard() {
  return (
    <Fragment>
        <div className="gift-card">
        <img src="./images/giftcard-template.jpg" alt=""/>
        <div className="gift-card-content">
            <h1>Give the Gift of Greenery</h1>
            <p>Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!</p>
            <a href="/" className="btn">purchase a gift card</a>
        </div>
    </div>
    </Fragment>
  )
}
export default Giftcard