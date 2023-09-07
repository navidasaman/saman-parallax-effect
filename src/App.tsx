import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Card from 'react-bootstrap/Card';
import me from './img/me.png'
import lines from './img/lines.png'
import FlipCard from './components/FlipCard';
import exp from './img/exp.jpg'
import knowledge from './img/knowledge2.png'
import portfolio from './img/portfolio.jpg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function App() {
	const teal = "teal";
	const blue = "royalblue";
	const purple = "blueviolet";

	return (
		/*------------------------------------First page------------------------------------*/
		<div className="App" id="starrysky" >
			<Parallax pages={5} className='animation'>

				<ParallaxLayer offset={0} factor={1.05} speed={3}>
					<div className='animation_layer parallax' id="sky"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} factor={1.05} speed={2}>
					<div className='animation_layer parallax' id="starrysky"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} factor={0.5} speed={1.5}>
					<div className='animation_layer parallax' id="moon"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} factor={1.05} speed={15}>
					<div className='animation_layer parallax' id="birds"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} factor={1} speed={3}>
					<div className='animation_layer parallax' id="mountains"></div>
				</ParallaxLayer>

				<ParallaxLayer className="flex-center flex-column blend-text"
					offset={0.5} factor={0.7} speed={0.9}>
					<h1 className='introTitle'>Hi! I'm Saman... </h1>
					<div className='animation_layer parallax' id="blue">
						<h2 className='undertitle'>Let me take you on a trip</h2>
					</div>
				</ParallaxLayer>

				{/*------------------------------------INTRODUCTION------------------------------------*/}

				<ParallaxLayer
					sticky={{ start: 1, end: 2 }}
					className="flex-center flip-card-container "
					style={{ width: "33%" }}
					offset={1}
				>
					<Card style={{
						width: "100%",
						height: "100%",
						background: `url(${lines})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						display: 'flex',
						justifyContent: "center",
						backgroundRepeat: "no-repeat",
						transform: 'scale(0.5)'
					}}
					>
					</Card>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1.5, end: 2.5 }}
					className="flex-center"
					style={{ width: "34%", marginLeft: "33%", marginRight: "33%" }}
					offset={1}
				>
					<Card style={{
						width: "100%",
						height: "100%",
						backgroundPosition: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundRepeat: "no-repeat",
						padding: '2px'
					}}
					>
						<strong className="introduction">I'm a Web developer making the web an interesting and harmonius place to browse, enhancing user experience through effective design and pleasant experience.</strong>
					</Card>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 2, end: 3 }}
					className="flex-center"
					style={{ width: "33%", marginLeft: "67%" }}
					offset={1}
				>
					<Card style={{
						width: "100%",
						height: "100%",
						background: `url(${me})`,
						backgroundPosition: "bottom 50% right 25%",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						transform: 'scale(0.7)'
					}}
					>
					</Card>
				</ParallaxLayer>


				{/*------------------------------------flip cards------------------------------------*/}

				<ParallaxLayer
					className="flex-center"
					offset={4}
				>
					<div className='flip-card-container'>
						<FlipCard
							bgColor={teal}
							image={exp}
							title="< Experience && Technologies />"
							text={<ul>
								<li>≻ HTML/CSS</li>
								<li>≻ React + TypeScript</li>
								<li>≻ Javascript</li>
								<li>≻ Media Queries, Bootstrap Tailwind etc</li>
								<li>≻ Database - MySQL</li>
								<li>≻ PHP with API's; SAX, DOM and XSLT</li>
								<li>≻ Java</li>
								<li>≻ Material design</li>
								<li>≻ User Experience Design</li>
								<li>≻ Object oriented programming</li>
								<li>≻ Procedural programming</li>
							</ul>}
						/>
						<FlipCard
							bgColor={blue}
							image={knowledge}
							title="< University Courses />"
							text={<ul>
								<li>≻ Basic programming with C++</li>
								<li>≻ Computer graphics</li>
								<li>≻ Content management and operation</li>
								<li>≻ Data Communication</li>
								<li>≻ Database Construction</li>
								<li>≻ Database System (MySQL)</li>
								<li>≻ Examination research</li>
								<li>≻ Information safety</li>
								<li>≻ Object oriented programming</li>
								<li>≻ Procedural programming</li>
								<li>≻ Introduction to User Experience Design</li>
								<li>≻ IT in organisations</li>
								<li>≻ Mobile application design</li>
								<li>≻ Object oriented programming (in Java)</li>
								<li>≻ Operative systems</li>
								<li>≻ Programming - mobile applications</li>
								<li>≻ Project in Software Engineering</li>
								<li>≻ Webprogramming</li>
								<li>≻ Web technologies research and developement</li>
								<li>≻ Website design</li>
								<li>≻ XML API</li>
							</ul>}
						/>
						<FlipCard
							bgColor={purple}
							image={portfolio}
							title="< Portfolio && Contact />"
							text={
								<div className='flex-center'>
									<ul>
										<li>
											<a className='linkSocials' href="https://github.com/navidasaman?tab=repositories" target="_blank" rel="noopener noreferrer">
												<BsGithub />
												<p className='contactTitle'>GitHub</p>
											</a>
										</li>
										<li>
											<a className='linkSocials' href="https://www.linkedin.com/in/navidasaman/" target="_blank" rel="noopener noreferrer">
												<BsLinkedin />
												<p className='contactTitle'>LinkedIn</p>
											</a>
										</li>
									</ul>
								</div>
							}
						/>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
