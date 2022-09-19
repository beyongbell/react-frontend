import * as React from "react"

import Main from '@layouts/main'
import HeroBlock from '@components/home/HeroBlock'
import PromotionalProducts from '@components/home/PromotionalProducts'

const IndexPage = () => {
  return (
    <Main>
      <HeroBlock />
      <PromotionalProducts />
    </Main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
