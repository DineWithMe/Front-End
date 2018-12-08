import ShoppingCartPage from '../src/views/ShoppingCartPage/ShoppingCartPage'
import Head from 'next/head'
import { Fragment } from 'react'

const ShoppingCart = () => {
  return (
    <Fragment>
      <Head />
      <ShoppingCartPage />
    </Fragment>
  )
}

export default ShoppingCart
