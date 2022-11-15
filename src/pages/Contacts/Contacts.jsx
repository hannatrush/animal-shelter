import FeedbackForm from '../../components/FeedbackForm';
import Map from '../../components/Map/Map';

import './Contacts.scss';

function Contacts() {
    return (
        <>
            <div className="page-top">
                <h3>Contact us</h3>
            </div>
            <div className="contact-container">
                <div className="contact-box">
                    <div className="contact-items">
                        <div className="contact-item">
                            <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px"><title/><desc/><defs/><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#157EFB" id="icon-6-mail-envelope-closed"><path d="M5.31500722,9.27391933 C5.12106043,9.45739405 5,9.71770487 5,10.0068455 L5,21.9931545 C5,22.2828882 5.11915965,22.5440384 5.31310687,22.7277332 L5.31310687,22.7277332 L13.05,16 L5.31500722,9.27391933 L5.31500722,9.27391933 L5.31500722,9.27391933 Z M27.6868931,9.27226685 C27.8808404,9.45596162 28,9.71711185 28,10.0068455 L28,21.9931545 C28,22.2822951 27.8789396,22.542606 27.6849928,22.7260807 L19.95,16 L27.6868931,9.27226685 L27.6868931,9.27226685 Z M19.2018297,16.6505829 L26.5,23 L6.5,23 L13.7981703,16.6505829 L16.5,19 L19.2018297,16.6505829 L19.2018297,16.6505829 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z M16.5,17.7000122 L26.5,9 L6.5,9 L16.5,17.7000122 L16.5,17.7000122 Z" id="mail-envelope-closed"/></g></g></svg>
                            <p>email@shelter.com</p>
                        </div>
                        <div className="contact-item">
                            <svg enableBackground="new 0 0 26 26" version="1.1" viewBox="0 0 26 26"><path d="M24.4970703,19.2363281c-0.4033203-0.6582031-1.0292969-1.4248047-1.7646484-2.1591797  c-0.5322266-0.5322266-2.359375-2.2675781-3.5341797-2.2675781c-0.3769531,0-0.6162109,0.1611328-0.75,0.2949219  l-1.5644531,1.5634766c-0.0263672,0.0263672-0.1103516,0.0566406-0.2617188,0.0566406  c-0.8681641,0-2.7089844-0.9609375-4.5478516-2.7988281c-2.4521484-2.453125-3.0419922-4.5097656-2.7421875-4.8095703  l1.5625-1.5634766c0.1347656-0.1347656,0.2958984-0.3740234,0.2958984-0.75  c0.0009766-1.1757813-1.7353516-3.0029297-2.2675781-3.5351563C8.3916016,2.7353516,6.5654297,1,5.3886719,1  c-0.3759766,0-0.6152344,0.1601563-0.75,0.2949219L1.5107422,4.4228516  C0.5869141,5.3457031,0.9238281,7.1513672,2.5126953,9.7890625C3.8916016,12.078125,6.0742188,14.7617188,8.65625,17.34375  C13.2363281,21.9238281,17.8740234,25.0009766,20.1962891,25c0.578125,0,1.0419922-0.171875,1.3808594-0.5107422  l3.1279297-3.1279297C25.3818359,20.6845703,24.7158203,19.5947266,24.4970703,19.2363281z M20.5166016,23.4287109  C20.4814453,23.4628906,20.3798828,23.5,20.1962891,23.5c-1.5810547,0-5.7910156-2.5292969-10.4794922-7.2167969  c-2.4990234-2.4990234-4.6005859-5.0800781-5.9189453-7.2685547C2.3125,6.5498047,2.4521484,5.6025391,2.5712891,5.4833984  L5.515625,2.5390625C5.8994141,2.6875,6.7890625,3.2539063,7.8623047,4.328125s1.640625,1.9628906,1.7890625,2.3466797  L8.2714844,8.0556641c-1.4384766,1.4384766,0.4130859,4.6005859,2.7421875,6.9306641  c1.9980469,1.9980469,4.1474609,3.2382813,5.6083984,3.2382813c0.6826172,0,1.0957031-0.2695313,1.3222656-0.4960938  l1.3808594-1.3798828c0.3837891,0.1484375,1.2724609,0.7158203,2.3466797,1.7890625  c1.0732422,1.0732422,1.640625,1.9628906,1.7890625,2.3466797L20.5166016,23.4287109z" fill="#1D1D1B"/></svg>
                            <p>+13 674 567 75 54</p>
                        </div>
                        <div className="contact-item">
                            <svg height="34" viewBox="0 0 24 24" width="24"><path d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M13,12.0043945 L11.1330566,12.0043945 L11.1330566,10.0043945 L13,10.0043945 L13,9 C13,7.34314575 14.3431458,6 16,6 L17,6 L17,8 L16,8 C15.4477153,8 15,8.44771525 15,9 L15,10.0043945 L16.9824219,10.0043945 L16.9824219,12.0043945 L15,12.0043945 L15,18 L13,18 L13,12.0043945 Z" fillRule="evenodd"/></svg>
                            <p>facebook.com/cozyhouse</p>
                        </div>
                        <div className="contact-item">
                            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24"><title/><path d="M18.18,4.44A7.27,7.27,0,0,0,5.5,11.51l5.41,10.82A1.23,1.23,0,0,0,12,23a1.2,1.2,0,0,0,1.08-.67L18.5,11.51A7.24,7.24,0,0,0,18.18,4.44Zm-1.47,6.18L12,20,7.29,10.62a5.27,5.27,0,1,1,9.42,0Z"/><path d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"/></svg>
                            <p>Boston, Central Street, 1st <br/>(Entrance from the store)</p>
                        </div>
                    </div>
                    <div className="form-box">
                        <FeedbackForm/>  
                    </div>
                    <Map/>
                </div>
            </div>
        </>
    )
}

export default Contacts;