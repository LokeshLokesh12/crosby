import React,{Fragment} from "react";
function Footer() {
  return (
    <Fragment>
        <footer>
            <h1>crosby</h1>
            <div className="footer_right">
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
            <a className="footer_shop" href="/shop">shop now</a>
        </footer>

    </Fragment>
  )
}
export default Footer