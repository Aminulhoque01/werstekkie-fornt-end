import Discover from '@/components/Pages/Discover/Discover'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Discover | 1Plus1 Dating website',
    description: 'Discover page',
    keywords: ['discover', 'page', 'example'],
}
const page = () => {
  return <Discover/>
}

export default page