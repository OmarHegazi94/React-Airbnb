import Head from 'next/head'
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import Header from './../components/Header';
import MediumCard from './../components/MediumCard';

import styles from '../styles/styles.module.css';
import LargeCard from './../components/LargeCard';
import Footer from './../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="py-8">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API End points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map((item) => (
                <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
              ))
            }
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-4xl font-semibold py-3">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide py-3">
            {cardsData?.map(item => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />


      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`).then(result => {
    return result.json();
  })

  const cardsData = await fetch(`https://links.papareact.com/zp1`).then(response => { return response.json() })

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
