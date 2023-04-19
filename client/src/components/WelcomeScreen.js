import React from 'react'
import { Link } from 'react-router-dom'
import "./WelcomeScreen.css"
function WelcomeScreen(props) {
    console.log(props)
    return (
        <div>
            <div className='ui vertical inverted sidebar menu'>
                <a className='active item'>Home</a>
                <a className='item'>Work</a>
                <a className='item'>Company</a>
                <a className='item'>Careers</a>
                <a className='item'>Login</a>
                <a className='item'>Signup</a>
            </div>
            <div className='pusher'>
                <div className='ui inverted vertical masthead center aligned segment'>
                    <div className='ui container'>
                        <div className='ui large secondary inverted pointing menu'>
                            <a className='toc item'>
                                <i className='sidebar icon'></i>
                            </a>
                            <a className='active item'>Home</a>
                            <a className='item'>Work</a>
                            <a className='item'>Company</a>
                            <a className='item'>Careers</a>
                            <div className='right item'>
                                {props.data ? (<Link className='ui inverted button' to={"/main"} style={{ color: "white" }}>Welcome Back, click to continue with:   <i>{props.uName.email}</i></Link>) : (<><Link className='ui inverted button' to={"/login"} style={{ color: "white" }}>Log in</Link>
                                    <Link className='ui inverted button' to={"/signup"} style={{ color: "white" }}>Sign up</Link>
                                    <Link className='ui inverted button' to={"/main"} style={{ color: "white" }}>Skip for now</Link></>)}

                            </div>
                        </div>
                    </div>
                    <div className='ui text container'>
                        <h1 className='ui inverted header'>
                            Welcome to CodeFusion
                        </h1>
                        <h2>Join a vibrant community of people just like you and connect with others who share your interests, passions, and values.</h2>
                        <div className='ui huge primary button'>
                            <Link to={"/signup"} style={{ color: "white" }}>
                                Join Community
                            </Link>
                            <i className='right arrow icon'></i>
                        </div>
                    </div>
                </div>


                <div className='ui vertical stripe segment'>
                    <div className='ui text container'>
                        <h3 className='ui header'>Services</h3>
                        <p>At CodeFusion, we offer a range of services designed to help you connect with like-minded people and build meaningful relationships online. Our platform provides a safe and welcoming space where you can share your interests, passions, and values with others who share them.</p>

                        <h4 className='ui horizontal header divider'>
                            <a href='#'>Case Studies</a>
                        </h4>
                        <h3 className='ui header'>Did We Tell You About Our Community?</h3>
                        <p>
                            Problem-solving through community support: You could feature a case study of a programmer who encountered a difficult technical challenge and was able to solve it with the help of other users on your platform. Discuss how your platform provided a supportive environment where users could share knowledge and collaborate to solve problems.</p>
                        <a className='ui large button'>I'm Still Quite Interested</a>
                    </div>
                </div>
                <div className='ui inverted vertical footer segment'>
                    <div className='ui container'>
                        <div className='ui stackable inverted divided equal height stackable grid'>
                            <div className='three wide column'>
                                <h4 className='ui inverted header'>About</h4>
                                <div className='ui inverted link list'>
                                    <a className='item' href='#'>Help</a>
                                    <a className='item' href='#'>Contact Us</a>
                                    <a className='item' href='#'>Feedback</a>
                                </div>
                            </div>
                            <div className='three wide column'>
                                <h4 className='ui inverted header'>Services</h4>
                                <div className='ui inverted link list'>
                                    <a className='item' href='#'>Wide range community</a>
                                    <a className='item' href='#'>Security</a>
                                    <a className='item' href='#'>User-friendly</a>
                                </div>
                            </div>
                            <div className='seven wide column'>
                                <h4 className='ui inverted header'><center>Developers</center></h4>
                                <p>Aryan Belle</p>
                                <p>Sanket Kore</p>
                                <p>Soham Patil</p>
                                <p>Nikhil Nikam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WelcomeScreen