import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { ShopContext } from '../ShopContext/Shopcontext'
import Footer from './Footer'
import Loading from './Loading/Loading'
import Menu from './Menu'

const Layout = () => {
  const valueShopContext = useContext(ShopContext)
  return (
    <div>
      {valueShopContext.loading ?
      <Loading />
    :
    <>
        <Menu />
        <Outlet />
        <Footer />
    </>
    }
    </div>
  )
}

export default Layout