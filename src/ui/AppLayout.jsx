import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const AppLayout = () => {
  return (
	<div>
		<Header/>
		<SideBar/>
		<main>
		<Outlet/>
		</main>
	</div>
  )
}

export default AppLayout