'use client'
import {ClerkProvider} from "@clerk/nextjs";

const AuthProvider = ({children}) => {
  return (
    <ClerkProvider >
        {children}
    </ClerkProvider>
  )
}

export default AuthProvider
