import CountUp from 'react-countup';

import './About.scss';

function About() {
    return (
        <>
            <div className="page-top">
                <h3>About the shelter "Cozy House"</h3>
            </div>
            <div className="about-history-container">
                <div className="about-history-box">
                    <h3> History</h3>
                    <div className="history-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque et omnis quaerat impedit! Reiciendis facere reprehenderit autem! Id culpa sequi nostrum corporis? Nisi molestias, et fuga ad porro obcaecati nostrum, maxime totam illum ipsa, aliquam consectetur minima! Cumque et sed magni eveniet architecto eum voluptas iure cupiditate distinctio saepe! Dolorum numquam ipsum, corrupti atque quibusdam, non officia placeat dolorem, error veniam nemo. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti fugit laboriosam dignissimos architecto voluptates numquam, blanditiis ut reiciendis corrupti itaque accusantium sint non nulla animi quasi enim? Voluptatibus similique est dolores nostrum, nobis tenetur maiores alias, dolorem sapiente consequuntur necessitatibus placeat blanditiis ad error quis! Enim perferendis laudantium odio ullam, aliquam asperiores voluptatem fugit, itaque natus necessitatibus quisquam blanditiis. Libero excepturi quia sed eos inventore doloribus aspernatur dolore aperiam. Nihil adipisci suscipit asperiores! Amet alias iste molestias a error? Ullam pariatur animi sed, esse distinctio odio repellat? Aut sequi consequuntur dolorem nulla veritatis adipisci vel dicta earum, modi tempora maiores libero recusandae, voluptatibus, voluptates unde harum ut nisi ex rerum a in provident dignissimos? Ex, quos. Doloribus, quod.
                        </p>
                    </div>
                    <div className="counters">
                        <div className="counter">
                            <p className='counter-number'>
                                <CountUp  start={0} end={10} duration={2} delay={0} enableScrollSpy={true} scrollSpyOnce={true}/>
                            </p>
                            <p className='counter-text'>Years</p>
                        </div>
                        <div className="counter">
                            <p className='counter-number'>
                                <CountUp  start={0} end={193} duration={2} delay={0} enableScrollSpy={true} scrollSpyOnce={true}/>
                            </p>
                            <p className='counter-text'>Volunteers</p>
                        </div>
                        <div className="counter">
                            <p className='counter-number'>
                                <CountUp  start={0} end={567} duration={2} delay={0} enableScrollSpy={true} scrollSpyOnce={true}/>
                            </p>
                            <p className='counter-text'>Animals</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="about-activity-container">
                <h3>What we do</h3>
                <div className="activity-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis ultrices pharetra. Morbi tempus at ante sit amet tristique. 
                </p> 
                <ul>
                    <li>dolor sit amet consectetur adipisicing elit</li>
                    <li>eos rerum error vitae soluta </li>
                    <li>nostrum eum hic optio consectetur magni amet earum</li>
                    <li>numquam nemo veniam repellat</li>
                    <li>laboriosam mollitia</li>
                </ul>
                <p>
                Praesent quis tortor faucibus, tristique ante vitae, dignissim lorem. Sed at ligula et sem mattis gravida ac vel erat. Ullam pariatur animi sed, esse distinctio odio repellat? Aut sequi consequuntur dolorem nulla veritatis adipisci vel dicta earum, modi tempora maiores libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur fugiat alias necessitatibus obcaecati ab nostrum dolores cupiditate animi tenetur non commodi ex nobis dolorem beatae voluptate, corporis a dolorum rem neque maxime inventore quis expedita distinctio. Dolorem tempora accusantium molestias eos? Itaque, quos alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati libero debitis tempora pariatur, quo voluptas soluta sequi nam consequuntur, eos facilis? Aliquam velit unde hic. Vel veritatis debitis, dolores temporibus harum quae error nihil hic maxime tempore consequuntur ipsam.
                </p>
                </div>
            </div>
            <div className="about-values-container">
                    <h3>Our values</h3>
                    <div className="values-items">
                    <div className="value-item">
                            <img src="img/trust.png" alt="" />
                            <p>Trust</p>
                        </div>
                        <div className="value-item">
                            <img src="img/community.png" alt="" />
                            <p>Social <br/>responsibility </p>
                        </div>
                        <div className="value-item">
                            <img src="img/impact.png" alt="" />
                            <p>Impact</p>
                        </div>
                        <div className="value-item">
                            <img src="img/commitment.png" alt="" />
                            <p>Commitment</p>
                        </div>
                        <div className="value-item">
                            <img src="img/kindness.png" alt="" />
                            <p>Kindness</p>
                        </div>
                        <div className="value-item">
                            <img src="img/love.png" alt="" />
                            <p>Love</p>
                        </div>
                        <div className="value-item">
                            <img src="img/friends.png" alt="" />
                            <p>Friendship</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default About;