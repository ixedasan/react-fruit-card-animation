export function Card({ card, selected, index }) {
	return (
		<>
			{index === selected && (
				<div className='absolute w-screen h-screen top-0 left-0 flex justify-between'>
					<div className='flex flex-col justify-around'>
						<img className='w-40 rotate-12' src={card.image} alt='' />
						<img className='w-64 rotate-45' src={card.image} alt='' />
					</div>
					<div className='flex flex-col justify-around'>
						<img className='w-36 -rotate-12' src={card.image} alt='' />
						<img className='w-64 -rotate-45' src={card.image} alt='' />
					</div>
				</div>
			)}
			<div className='h-full w relative'>
				<div
					className={`h-full rounded-xl flex items-center justify-center ${card.bgCardColor} z-10 relative`}
				>
					<span className='text-white text-[1.5rem] absolute top-4 left-3'>
						{card.icon}
					</span>
					<h1
						className={`${
							selected === index
								? 'rotate-0 text-[6rem]'
								: 'rotate-90 text-[2rem]'
						} text-white font-bold  ease-in-out transition-all duration-1000 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
					>
						{card.title}
					</h1>
				</div>
				<img
					src={card.image}
					className={`img z-1 ${
						selected === index ? 'opacity-1' : 'opacity-0'
					} absolute top-0 w-60`}
				/>
			</div>
		</>
	)
}
