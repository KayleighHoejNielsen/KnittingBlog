import './App.css'

import Header from './components/Header'
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'
import BlogEntry from './components/BlogEntry'

import blueScarf from './images/blueScarf.jpg'
import halloweenScarf from './images/halloweenScarf.jpg'
import sleevelessTop from './images/sleevelessTop.jpg'
import greenSweater from './images/greenSweater.jpg'
import purpleSweater from './images/purpleSweater.jpg'
import halloweenSweater from './images/hallowenSweater.jpg'

export default function App() {
  return (
    <>
      <Header />
      <Title />
      <BlogEntry 
        img= {{
          src: {blueScarf},
          alt: "blue unfinished scarf"
        }}
        title="Recreating an anime Scarf"
        date="20th January 2025"
        //this text is going end up being a preview of the blog article itself. First 50 words?
        text="This is my attempt at recreating a scarf from an anime that I have really enjoyed: The Dangers of the Heart. 
          From the design on the show this was definitely meant to be made with woven fabric, but I am still going to knit it 
          anyways. I had to try…" 
       />
      <BlogEntry 
        img= {{
          src: {halloweenScarf},
          alt: "scarf with a halloween cat design"
        }}
        title="Halloween Scarf Progress"
        date="1st January 2025"
        text="I am trying a whole new technique here! This Halloween cat scarf design is done using double knitting. 
          This is where you are knitting the front and the back simultaneously each row, giving the effect that the 
          colours are reversable while keeping the fabric flat. Another plus side is that…" 
      />
      <BlogEntry 
        img= {{
          src: {sleevelessTop},
          alt: "un finished sleeveless top"
        }}
        title="Recreating a top in my Wardrobe"
        date="30th December 2024"
        text="You ever have the most perfect top sitting in your wardrobe and have a fear that one day something will 
          happen to it and suddenly it will be gone? Well, I have a top like that and its a knit that I bought from a 
          store, so I decided to…" 
      />
      <BlogEntry 
        img= {{
          src: {greenSweater},
          alt: "green sweater with lace"
        }}
        title="The Perfect Winter Sweater"
        date="1st December 2024"
        text="I have loved this design for a long time, but even I was surprised with how nicely this sweater turned out. As 
          usual I made a couple of changes to make it suit me, but the final product is gorgeous, and I have worn it a few times 
          happily. I…" 
      />
      <BlogEntry 
        img= {{
          src: {purpleSweater},
          alt: "bright purple sweater"
        }}
        title="Purple Dream"
        date="25th November 2024"
        text="The yarn for this sweater is utterly dreamy. Still not sure whether the design is doing it full justice, but the 
          reason I got this yarn was simply because of that insanely saturated beautiful purple colour. I definitely paid for 
          that in the soaking once I had finished but it…" 
      />
      <BlogEntry 
        img= {{
          src: {halloweenSweater},
          alt: "halloween design sweater"
        }}
        title="Halloween Sweater"
        date="31st October 2024"
        text="I am a big Halloween fan, so it only makes sense to make this. I went for a pattern for a raglan sweater because I really 
        dont think that yoked sweaters suit me just for the sake of colour work. I definitely regret not getting glow in the dark yarn…" 
      />
      <Footer />
    </>
  )
}


