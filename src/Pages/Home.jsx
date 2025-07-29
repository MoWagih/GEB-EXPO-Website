import React from 'react'
import KingSalmanWord from '../Sections/KingSalmanWord'
import HeroSection from '../Sections/HeroSection'
import Footer from '../Components/Footer'
import PrinceMohamed from '../Sections/PrinceMohamed'
import Brief from '../Sections/Brief'
import Goals from '../Sections/Goals'
import Counter from '../Sections/Counter'
import Gallery from '../Sections/Gallery'
import JoinExpo from '../Sections/JoinExpo'
import Partners from '../Sections/Partners'

export default function Home() {
  return (
    <div className='p-4 sm:p-12 flex flex-col justify-center gap-12 md:gap-22 sm:pt-4 md:pt-2 sm:gap-22 lg:pt-[77px] xl:pt-[30px] xl:justify-start xl:items-start xl:gap-22'>
        {/* Hero Section */}
        <HeroSection />
        {/* King Salman  */}
        <KingSalmanWord />

        {/* Prince Mohammed bn Salman */}
        <PrinceMohamed />
        {/* Brief */}
        <Brief />

        {/* Goals */}
        <Goals />

        {/* Counter */}
        <Counter />

        {/* Gallery */}
        <Gallery />

        {/* Be a part of Expo */}
        <JoinExpo />

        {/* Exhibitors & Partners */}
        <Partners />

        {/* Footer */}
        <Footer />
    </div>
  )
}
