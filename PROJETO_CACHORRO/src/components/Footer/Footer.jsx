const Header = () => {
  return (
    <header>
      <h1>Dog Explorer</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
        <h3>Entenda o Modelo Cliente-Servidor:</h3>
        <p>
          O <strong>Cliente</strong> (seu navegador) faz uma requisição HTTP para o 
          <strong> Servidor</strong> (API Dog CEO). O servidor processa e envia de volta 
          uma resposta JSON com a imagem do cachorro.
        </p>
      </div>
    </header>
  );
};

export default Header;