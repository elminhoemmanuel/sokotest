import Head from 'next/head'
import React, {useState} from 'react'
import DesktopNav from '../components/DesktopNav';
import SearchBar from '../components/SearchBar';
import SearchBarMobile from '../components/SearchbarMobile';
import StoreBody from '../components/StoreBody';
import TopModal from '../components/TopModal';

export default function Home() {


  return (
      <>

          <Head>
            <title>Soko | Target</title>
            <meta name="keywords" content="Soko, an e-commerce platform for emergin businesses"/>
          </Head>

          <div className="home-holder relative w-full">
            <SearchBar />
            <TopModal />
            <DesktopNav />
            <SearchBarMobile />
            <StoreBody />
            
          </div>

      </>
  )
}
