import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dog Explorer</h1>
      <div className="header-box">
        <h3>Entenda o Modelo Cliente-Servidor:</h3>
        <p>
          O <strong>Cliente</strong> (seu navegador) faz uma requisição HTTP para o
          <strong> Servidor</strong> (API Dog CEO). O servidor processa e envia de volta
          uma resposta JSON com a imagem do cachorro.
        </p>
      </div>
    </header>
  )
}

export default Header
