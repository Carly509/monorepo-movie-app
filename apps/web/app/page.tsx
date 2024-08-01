'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <main>
      <h1>Welcome to the Movie App</h1>
      <p>Message from backend: {message}</p>
    </main>
  )
}
