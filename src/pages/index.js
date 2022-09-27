import * as React from "react"

import Main from '@layouts/main'

import HeroBlock from '@components/home/HeroBlock'
import PromotionalProducts from '@components/home/PromotionalProducts'
import FeaturedProducts from '@components/home/FeaturedProducts'
import MarketingButtons from "@components/home/MarketingButtons"
import CallToAction from "@components/home/CallToAction"

const IndexPage = () => {
  return (
    <Main>
      <HeroBlock />
      <PromotionalProducts />
      <FeaturedProducts />
      <MarketingButtons />
      <CallToAction />
    </Main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
