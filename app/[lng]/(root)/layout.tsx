import React from 'react'
import { ChildProps } from '@/types'
import Navbar from '@/app/[lng]/(root)/_components/navbar'
import Footer from './_components/footer'
const Layout = ({ children }: ChildProps) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
