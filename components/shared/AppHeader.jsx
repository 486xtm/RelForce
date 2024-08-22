import { useState } from 'react';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import LinkButton from './ButtonLink';
import MenuModal from './MenuModal';
import Link from 'next/link';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
		>
			<div className="z-10 block px-5 py-6 lg:max-w-screen-xl lg:flex lg:justify-between lg:items-center">
				<MenuModal toggleMenu={toggleMenu} showMenu={showMenu} />
				<div className="items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium lg:ml-4 lg:mt-3 lg:flex lg:p-0 lg:shadow-none">
					<LinkButton linkname={"/projects"} title={"Home"} />
					<LinkButton linkname={"/partners"} title={"Services"}  />
					<LinkButton linkname={"/company"} title={"Portfolio"}/>
					<LinkButton linkname={"/opportunities"} title={"Team"}  />
					<LinkButton linkname={"/opportunities"} title={"contact"}  />
				</div>
				
				<div className='items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium lg:ml-4 lg:mt-3 lg:flex lg:p-0 lg:shadow-none'>
					
					<Link href="https://calendly.com/outreach-bostoninnovations/30min" target='_blank' rel="noopener noreferrer">
						<button
							className="
								orbitron
								font-medium
								text-[17px]
								text-[#FFF]
								leading-[20px]
								bg-[#FE5A36]
								rounded-[6px]
								px-[36px]
								py-[16px]
								gap-[10px]
								w-auto
								hover:bg-[#FF3D12] /* Slightly darker shade */
								transition
								duration-300
							"
							aria-label="Book Meeting Button"
						>
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</motion.nav>
	);
}

export default AppHeader;
