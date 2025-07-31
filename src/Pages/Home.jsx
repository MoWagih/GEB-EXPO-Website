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
import Program from '../Sections/Program'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <HeroSection />

      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-12 xl:px-20 gap-16 sm:gap-20 lg:gap-24 py-12">

        {/* King Salman */}
        <KingSalmanWord />

        {/* Prince Mohammed bin Salman */}
        <PrinceMohamed />

        {/* Brief */}
        <Brief />

        {/* Goals */}
        <Goals />

        {/* Counter */}
        <Counter />

        {/* Be a part of Expo */}
        <JoinExpo />

        {/* Program */}
        <Program />

        {/* Gallery */}
        <Gallery />

        {/* Exhibitors & Partners */}
        <Partners />
      </div>

      <Footer />
    </div>
  )
}
