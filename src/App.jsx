import { gsap } from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'
import { FaAppleAlt } from 'react-icons/fa'
import { GiGrapes } from 'react-icons/gi'
import { LuBanana } from 'react-icons/lu'
import { PiOrangeFill } from 'react-icons/pi'
import apple from './assets/images/apple.png'
import banana from './assets/images/banana.png'
import grapes from './assets/images/grapes.png'
import orange from './assets/images/orange.png'
import { Card } from './components/Card'

export function App() {
	const [selected, setSelected] = useState(0)
	const cardsRef = useRef([])
	cardsRef.current = []
	const bgRef = useRef()

	const cards = [
		{
			title: 'APPLE',
			bgCardColor: 'bg-red-500',
			bgColor: '#F87171',
			icon: <FaAppleAlt />,
			image: apple,
		},
		{
			title: 'ORANGE',
			bgCardColor: 'bg-orange-500',
			bgColor: '#FDBA74',
			icon: <PiOrangeFill />,
			image: orange,
		},
		{
			title: 'BANANA',
			bgCardColor: 'bg-yellow-500',
			bgColor: '#FDE047',
			icon: <LuBanana />,
			image: banana,
		},
		{
			title: 'GRAPES',
			bgCardColor: 'bg-purple-500',
			bgColor: '#C084FC',
			icon: <GiGrapes />,
			image: grapes,
		},
	]

	const eventClick = index => {
		setSelected(index)
	}

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.utils.toArray(cardsRef.current).forEach((card, index) => {
				if (index === selected) {
					gsap.to(bgRef.current, {
						backgroundColor: cards[index].bgColor,
						duration: 1,
						ease: 'none',
					})
					gsap.to('.img', {
						top: '-150px',
						delay: 0.3,
						duration: 0.5,
						ease: 'none',
					})
				}
			})
		})
		return () => ctx.revert()
	}, [selected])

	const addToRef = el => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el)
		}
	}

	return (
		<>
			<div
				ref={bgRef}
				className='h-screen flex items-center justify-center'
			>
				{cards.map((card, index) => (
					<div
						ref={addToRef}
						key={index}
						onClick={() => eventClick(index)}
						className={`${
							index === selected ? 'w-[500px]' : 'w-20'
						} h-96 w-20 cursor-pointer transition-all duration-1000 ease-in-out`}
					>
						<Card card={card} selected={selected} index={index} />
					</div>
				))}
			</div>
		</>
	)
}
