"use client"
import React, { useRef,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const Herosection = () => {
    const imageRef = useRef(null)
    useEffect(() => {
        const imageElement=imageRef.current
        const handleScroll=()=>{

            const scrolledPostion=window.scrollY;
            const scrolledthreshold=100;
            if(scrolledPostion>scrolledthreshold){
      
                imageElement.classList.add("scrolled")
            }
            else{
                imageElement.classList.remove("scrolled")
            }
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener("scroll",handleScroll)
     
    }, [])
    
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className="space-y-6 text-center">
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Your Ai Career Coach for

                <br />
                Proffesional Sucess
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance your career with personalized guidance, interview prep, and AI-powered tools for job sucess 
                </p>
            </div>
            <div className="flex justify-center space-x-4">

            <Link href="/dashboard">
            <Button size={"lg"} className="px-8">Get Started</Button>
            </Link>
            <Link target='_blank' href="https://www.youtube.com/watch?v=6dYWe1c3OyU">
            <Button size={"lg"} className="px-8" variant="outline">Learn More</Button>
            </Link>
            </div>
        </div>
        <div className="hero-image-wrapper my-5 ">
            <div ref={imageRef} className='hero-image'>

                <Image src={"/banner.jpg"}
                
                
                width={1280}
                height={720}
                alt='Dashboard Preview'
                className='rounded-lg shadow-2xl border mx-auto'
                priority/>
            </div>
        </div>
      
    </section>
  )
}

export default Herosection
