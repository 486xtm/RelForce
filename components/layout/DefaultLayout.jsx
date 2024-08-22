import { useState, useEffect } from 'react';
import PagesMetaHead from '../PagesMetaHead';
import period from '../../data/const';
import Image from 'next/image';
import Footer from '../shared/Footer';

const Load = () => {
	return (
	  <div className="relative w-500 h-500">
		<style jsx>{`
		  @keyframes rotate {
			0% {
			  transform: rotate(0deg);
			}
			100% {
			  transform: rotate(360deg);
			}
		  }
		  .mkd-rotate {
			animation: rotate 1.5s linear infinite;
		  }
		`}</style>
		<img 
		  src="/images/load1.png" 
		  className="absolute inset-0 object-cover  w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]" 
		  alt="Background Image"
		/>
		<img 
		  id="rotatingImage" 
		  src="/images/load2.png" 
		  className="sm:mt-[16px] mt-[10px] mkd-rotate sm:w-[300px] sm:h-[300px] w-[150px] h-[150px]" 
		  alt="Rotating Image"
		/>
	  </div>
	);
  }

const DefaultLayout = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
	  const timer = setTimeout(() => {
		setIsLoading(false);
	  }, period);
	  return () => clearTimeout(timer);
	}, []);
	
	return (
		<div className='min-h-screen ' style={{padding: 0, margin: 0}}>
			<PagesMetaHead />
				{isLoading ? (
					<div class="loading-container flex justify-center items-center h-screen">
						<Load/>
					</div>
					) : (
					<>
					<div>
						{children}
					</div>
					<Footer />
					</>
					)
				}
		</div>
	);
};

export default DefaultLayout;
