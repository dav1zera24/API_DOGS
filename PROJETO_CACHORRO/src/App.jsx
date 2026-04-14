import { useState } from 'react';
import './App.css';

// Note que agora entramos na pasta E chamamos o arquivo .jsx
import Header from "./components/Header/Header";
import DogCard from "./components/DogCard/DogCard";
import Loading from "./components/Loading/Loading";
import ErrorMessage from "./components/ErrorMensage/ErrorMessage";
import FetchButton from "./components/FetchButton/FetchButton";
function App() {
  // Requisito 2: Estados essenciais
  const [dogUrl, setDogUrl] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');

  // Requisito 3 e 4: Lógica de Requisição HTTP
  const handleFetchDog = async () => {
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);

      const data = await response.json();
      if (data.status !== 'success') throw new Error('Resposta da API inválida');

      setDogUrl(data.message);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Erro desconhecido');
    }
  };

  return (
    <main className="app-container">
      {/* Requisito 1: Cabeçalho com Contexto Cliente-Servidor */}
      <Header />

      {/* Requisito 1 e 5: Botão de ação */}
      <FetchButton 
        onClick={handleFetchDog} 
        disabled={status === 'loading'} 
      />

      {/* Área Dinâmica de Conteúdo */}
      <section className="content-area">
        {status === 'idle' && (
          <p className="initial-message">
            Pronto para conhecer um novo amigo? <br/> 
            Clique no botão acima!
          </p>
        )}

        {status === 'loading' && <Loading />}

        {status === 'error' && (
          <ErrorMessage message={errorMessage || "Ops! Ocorreu um erro ao buscar os dados. Verifique sua conexão."} />
        )}

        {status === 'success' && dogUrl && (
          <DogCard imageUrl={dogUrl} />
        )}
      </section>
    </main>
  );
}

export default App;