import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our flagship trading platform with a superior interface and features like advanced charts, basket orders, and more. Available on web and mobile."
        tryDemo="https://kite.zerodha.com"
        lernMore="/product"
        googlePlay="https://play.google.com"
        appStore="https://apps.apple.com"
      />

      <RightSection
        imageUrl="/media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. View your profitability, holdings, P&L reports, and much more."
        tryDemo="https://console.zerodha.com"
        lernMore="/product"
      />

      <LeftSection
        imageUrl="/media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, without commission, from India's largest broker. Direct mutual fund savings can add up to 1.5% more returns on your investments."
        tryDemo="https://coin.zerodha.com"
        lernMore="/product"
        googlePlay="https://play.google.com"
        appStore="https://apps.apple.com"
      />

      <RightSection
        imageUrl="/media/images/streak.png"
        productName="Streak"
        productDescription="Create and backtest market strategies without coding using Streak. Advanced algo trading platform for retail traders."
        tryDemo="https://streak.tech"
        lernMore="/product"
      />

      <Universe />
    </>
  )
}

export default ProductPage
