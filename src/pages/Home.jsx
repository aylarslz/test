import React from 'react'
import Hero from '../components/home/Hero'
import BestSelling from '../components/home/BestSelling'
import ImagesRow from '../components/home/ImagesRow'
import Join from '../components/home/Join'
import SuperDelicious from '../components/home/SuperDelicious'
import LimitedRange from '../components/home/LimitedRange'
import Hotdog from '../components/home/Hotdog'

const Home = () => {
  return (
    <>
    <Hero/>
    <Hotdog/>
    <BestSelling/>
    <LimitedRange/>
    <SuperDelicious/>
    <Join/>
    <ImagesRow/>
    </>
  )
}

export default Home
