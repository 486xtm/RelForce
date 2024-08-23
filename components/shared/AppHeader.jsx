import { useState } from 'react';
import { motion } from 'framer-motion';
import LinkButton from './ButtonLink';
import MenuModal from './MenuModal';
import Link from 'next/link';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<div className="z-10 block px-5 py-10 lg:max-w-screen-xl lg:flex lg:justify-between lg:items-center">
			<MenuModal toggleMenu={toggleMenu} showMenu={showMenu} />
			<div className="items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium lg:ml-4 lg:mt-3 lg:flex lg:p-0 lg:shadow-none">
				<LinkButton linkname={"/"} title={"Home"} />
				<LinkButton linkname={"/services"} title={"Services"}  />
				<LinkButton linkname={"/portfolio"} title={"Portfolio"}/>
				<LinkButton linkname={"/team"} title={"Team"}  />
				<LinkButton linkname={"/contact"} title={"contact"}  />
			</div>
			
			<div className='items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium lg:ml-4 lg:mt-3 lg:flex lg:p-0 lg:shadow-none'>
				
				<Link href="" rel="noopener noreferrer">
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
						aria-label="Get Started"
					>
						Get Started
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AppHeader;
