'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RootState } from '@/lib/redux/store'

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push('/signin')
    }
  }, [currentUser, router])

  return currentUser ? <>{children}</> : null
}