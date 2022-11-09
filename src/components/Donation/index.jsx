import './Donation.scss'

function Donation() {
    return(
        <div className="donation-box">
            <img className="img-addition" src="img/Dog8.png" alt=""/>
            <div className="addition-items">
                <h3>In addition, you <br/>can make a donation</h3>
                <p className="bank">Name of the bank / Type of bank account</p>
                <div className="card">
                    <img src="img/credit-card (1).png" alt="" className="img-card"/>
                    <p className="card-number">8380 2880 8028 8791 7435</p>
                </div>
                <div className="addition-text">
                Legal information and lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed <br/>ac diam. Praesent ultrices maximus tortor et vulputate. Interdum <br/>et malesuada fames ac ante ipsum primis in faucibus.
                </div>
            </div>
        </div>
    )
}

export default Donation;