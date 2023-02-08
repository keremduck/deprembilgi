import Head from 'next/head'
import { Inter } from '@next/font/google'
import React, {useEffect, useState} from 'react';
const inter = Inter({ subsets: ['latin'] })
import Navbar from './components/Navbar';
import Card from './components/Card';
import { Vortex } from 'react-loader-spinner'

// Skeleton Loader yap.

export default function Home() {
    const [eq, setEq] = useState([]);
    const getData = async () => {
      const response = await fetch('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=500');
      const data = await response.json();
      setEq(data.result)
    }

    useEffect(() => {
      getData();
    })
  return (
    <>
      <Head>
        <title>Deprem Bilgi</title>
        <meta name="description" content="Türkiyede son olan 500 depremi ayrıntılı bir biçimde gösterir." />
      </Head>
      <div className={"row","loader hidden"}>
        <Vortex
          heigth="100"
          width="100"
          color='white'
          ariaLabel='loading'
        />
      </div>
        <Navbar />
        <div>
          {eq.map((item, index) => {
            return (
              <div>
                <Card key={"index"} location={item.lokasyon} date={item.date} magnitude={item.mag} depth={item.depth} lat={item.lat} lng={item.lng}/>
              </div>
            )
          })}
      </div>
    </>
  )
}
