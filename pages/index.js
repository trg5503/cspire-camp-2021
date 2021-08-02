import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Index.module.css'
import PetCard from '../components/PetCard'
import Card from '../components/Card'
import FEATURED_PETS from '../data/featured.json'

export default function Home() {
  const [ carousel, setCarousel ] = useState(0);
  useEffect(() => {
    let carouselAuto = setTimeout(() => {
      setCarousel((carousel + 1) % 3)
    }, 8000)

    return () => {
      clearTimeout(carouselAuto);
    }
  })
  return (
    <>
      <div className={styles.carousel} style={{
        background: '#20b1fa',
        height: '550px'
      }}>
        <div className={styles.carouselArrow} onClick={() => setCarousel(carousel == 0 ? 2 : carousel - 1)} style={{
          float: 'left'
        }}>&lt;</div>
        <div style={{
          width: '100%'
        }}>
          <div className={styles.carouselContent} style={{
            display: carousel == 0 ? 'flex' : 'none'
          }}>
            <CarouselPageOne />
          </div>
          <div className={styles.carouselContent} style={{
            display: carousel == 1 ? 'flex' : 'none'
          }}>
            <CarouselPageTwo />
          </div>
          <div className={styles.carouselContent} style={{
            display: carousel == 2 ? 'block' : 'none',
            textAlign: 'center'
          }}>
            <CarouselPageThree />
          </div>
        </div>
        <div className={styles.carouselArrow} onClick={() => setCarousel((carousel + 1) % 3)} style={{
          float: 'right'
        }}>&gt;</div>
      </div>
      <a id="about-us" />
      <div className={styles.section}>
        <h1>About Us</h1>
        <p className={styles.description}>
          We are a <u>no-kill</u>, non-profit shelter trying to find loving homes for abandoned animals,
          especially those with special needs that are more difficult to adopt. We have been in operation
          for about 3 years and we typically have about 25 animals in our shelter at a time. All of our
          business runs off of your gracious donations and volunteering, so please consider donating,
          volunteering, or maybe even both to support both us and the other homeless animals in our area.
        </p>
      </div>
      <div className={styles.section}>
        <h1>Our Animals</h1>
        <div className={styles.cardContainer}>
          <PetCard pet={FEATURED_PETS[0]} />
          <PetCard pet={FEATURED_PETS[1]} />
          <PetCard pet={FEATURED_PETS[2]} />
        </div>
        <Link href='/pets'><button className={styles.actionButton}>Show All</button></Link>
      </div>
      <a id="contact" />
      <div className={styles.section}>
        <h1>Contact Us</h1>
        <Card>
          <p style={{
            fontSize: 'larger'
          }}>
            Phone: (769) 555-1234 •
            Address: 123 Main Street, Starkville, MS •
            Email: bethany.lucas@gocommodores.org
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.434626509784!2d-88.81836338483876!3d33.464033455944595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888135102e6cbd99%3A0x83ff3b481a227f51!2s123%20E%20Main%20St%2C%20Starkville%2C%20MS%2039759!5e0!3m2!1sen!2sus!4v1626354448327!5m2!1sen!2sus" width="800" height="450" allowfullscreen="" style={{
            border: '0'
          }} loading="lazy"></iframe>
        </Card>
      </div>
    </>
  )
}

function CarouselPageOne() {
  return (
    <>
      <Image src='/img/hero.jpeg' width={400} height={550} layout='fixed' objectFit='cover' placeholder="blur" blurDataURL='/_next/image?url=/img/hero.jpeg&w=16&q=1' />
      <div style={{
        margin: '50px'
      }}>
        <h1>Be a Hero! Donate today.</h1>
        <Link href='/donate'><button className={styles.actionButton}>Donate</button></Link>
      </div>
    </>
  )
}

function CarouselPageTwo() {
  return (
    <>
      <div style={{
        margin: '50px',
        textAlign: 'right'
      }}>
        <h1>Featured Animal: Nubbins</h1>
        <h3>She was found under a home and had her tail surgically removed.</h3>
        <Link href='/pets/nubbins'><button className={styles.actionButton}>More info</button></Link>
      </div>
      <div style={{
        minWidth: '600px'
      }}>
        <Image src='/img/nubbins.jpeg' width={600} height={550} layout='fixed' objectFit='cover' placeholder="blur" blurDataURL='/_next/image?url=/img/nubbins.jpeg&w=16&q=1' />
      </div>
    </>
  )
}

function CarouselPageThree() {
  return (
    <>
      <h1>Subscribe to our Newsletter</h1>
      <h3>Notifications of event dates, new animals for adoption, and more!</h3>
      <input type='email' style={{
        fontSize: 'xx-large',
        background: '#00000022',
        borderRadius: '15px',
        border: '1px gray solid'
      }} placeholder='you@example.com' />
      <br /><br />
      <button className={styles.actionButton} onClick={() => window.alert('Email newsletter not yet available, but try again soon!')}>Subscribe</button>
    </>
  )
}