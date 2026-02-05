import { useEffect, useRef } from 'react'

function Hero() {
    const videoRef = useRef();
    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.playbackRate = 2;
        }
    }, [])
    const handleBuy = () => {
           // Navigate to purchase page or open purchase 
         window.location.href = '/buy-macbook-pro';
    };
  return (
    <section id='hero'> 
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Pro title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
        <button onClick={handleBuy} aria-label="Buy 
                  ┃  MacBook Pro">Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero
