'use client'
import React, { useEffect, useState } from 'react'

interface ClientOnlyProps{
    children:React.ReactNode
}
const ClientOnly:React.FC<ClientOnlyProps> = ({children}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    // Only render the Navbar after mounting on the client side
    if (!mounted) {
      return null; // Prevent mismatched content during SSR
    }
  return (
    <>
    {children}
    </>
  )
}

export default ClientOnly