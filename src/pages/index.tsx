import Head from "next/head";
import Image from "next/image";
import NavHeader from "@/components/navigation/NavHeader";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp, stagger } from "@/utils/animate";

export default function Home() {
	return (
		<>
			<Head>
				<title>OVRA</title>
				<meta name="description" content="The next step in virtual reality" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
				<NavHeader />
				{/* Hero */}
				<motion.section
					className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mx-40 mt-10"
					variants={stagger}
				>
					<div className="flex flex-col gap-y-8 min-w-[22rem]">
						<div className="text-center md:text-left">
							<motion.h1 className="text-9xl font-bold" variants={fadeInUp}>
								OVRA
							</motion.h1>
							<motion.h2 className="text-4xl uppercase" variants={fadeInUp}>
								The next step in virtual reality
							</motion.h2>
						</div>
						<motion.div
							className="flex gap-x-4 mt-4 justify-center md:justify-start"
							variants={fadeInUp}
						>
							<Link
								href="/hackathon"
								className="bg-white text-black font-bold py-4 px-6"
							>
								OUR HACKATHON
							</Link>
							<Link
								href="/about"
								className="text-white font-bold py-4 px-6 hover:underline"
							>
								LEARN MORE
							</Link>
						</motion.div>
					</div>
					<motion.div className="min-w-[15rem]" variants={fadeInUp}>
						<Image
							src="/landing/hero1.png"
							alt="OVRA Logo"
							width={500}
							height={100}
						/>
					</motion.div>
				</motion.section>
			</motion.main>
		</>
	);
}
