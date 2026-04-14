import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import DogCard from './components/DogCard'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import FetchButton from './components/FetchButton'

function App() {
  // Requisito 2: Gerenciamento de Estados
  const [dogData, setDogData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Requisito 3 e 4: Requisição HTTP com Tratamento de Erros
  const fetchDog = async () => {
    setLoading(true)
    setError(null) // Limpa erros anteriores (Requisito 4)

    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar os dados da API.')
      }

      const data = await response.json()
      setDogData(data.message) // A API de cachorros retorna a URL na propriedade 'message'
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      {/* Requisito 1: Título e Explicação */}
      <Header />

      {/* Requisito 1 e 5: Botão disparador com controle de loading */}
      <FetchButton onClick={fetchDog} disabled={loading} />

      {/* Requisito 5: Feedback Visual Condicional */}
      <div className="content-area">
        {loading && <Loading />}
        
        {error && <ErrorMessage message={error} />}

        {/* Requisito 5 e 6: Exibição dos dados (apenas se não estiver carregando e houver dados) */}
        {!loading && !error && dogData && (
          <DogCard imageUrl={dogData} />
        )}

        {/* Mensagem inicial quando não há dados (Requisito 5) */}
        {!loading && !error && !dogData && (
          <p>Clique no botão para buscar um doguinho!</p>
        )}
      </div>
    </div>
  )
}

export default App