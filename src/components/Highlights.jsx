import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

    useGSAP(() => {
        gsap.to('#title', {
y:0,
opacity:1
        });
        gsap.to('.link', {
            opacity:1,
            y:0,
            duration: 1,
            stagger:0.25
        });
        
    }, [])
  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-Zinc" id="highlights">
<div className="screen-max-width">
    <div className="mb-12 w-full items-end md:flex justify-between">
        <h1 id="title" className="section-heading">Get the highlights</h1>
    <div className="flex flex-wrap items-end gap-5">
        <p className="link">Watch the film 
        <img src={watchImg} className="ml-2" alt="watch" />
        </p>
        <p className="link">Watch the event
        <img src={rightImg} className="ml-2" alt="right" />
        </p>
    </div>
    </div>

    <VideoCarousel />
</div>
    </section>
  )
}

export default Highlights