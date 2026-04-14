import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import DogCard from './components/DogCard'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import FetchButton from './components/FetchButton'
import Footer from './components/Footer' // ✅ import do Footer

function App() {
  const [dogData, setDogData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchDog = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar os dados da API.')
      }

      const data = await response.json()
      setDogData(data.message)
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <Header />

      <FetchButton onClick={fetchDog} disabled={loading} />

      <div className="content-area">
        {loading && <Loading />}
        
        {error && <ErrorMessage message={error} />}

        {!loading && !error && dogData && (
          <DogCard imageUrl={dogData} />
        )}

        {!loading && !error && !dogData && (
          <p>Clique no botão para buscar um doguinho!</p>
        )}
      </div>

      <Footer /> {/* ✅ Footer renderizado no final */}
    </div>
  )
}

export default App