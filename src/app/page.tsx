// import Image from "next/image";
'use client'
import { useEffect, useState } from "react";
import LoginPage from "./(pages)/login/page";
// import db from '@/lib/db'

export default function Home() {
  const [users, setUsers] = useState<Record<string, any>[] | []>([])

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('/api/users', {
        method: 'GET',
      })
      if (!res.ok) {
        throw new Error('Response is bad')
      }
      const json = await res.json()
      const { users } = json
      setUsers(users)
      return json
    }
    const handleError = (e) => {
      console.log('fetch fail', e)
    }
    
    fetchUsers().catch(handleError)
  }, [])

  // const { users } = db.data
  // const userStr = JSON.stringify(users)
  return (
    <main>
      {JSON.stringify(users)}
      <LoginPage />
    </main>
  );
}
