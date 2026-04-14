const DogCard = ({ imageUrl }) => {
  return (
    <div className="dog-card" style={{ marginTop: '20px' }}>
      <img src={imageUrl} alt="Cachorro aleatório" style={{ maxWidth: '300px', borderRadius: '8px' }} />
      <div className="dog-info">
        <p><strong>Nome:</strong> Amigão Aleatório</p>
        <p><strong>Email:</strong> contato@dogceo.com</p>
        <p><strong>Cidade:</strong> Mundo Canino</p>
        <p><strong>Empresa:</strong> Dog CEO API Service</p>
      </div>
    </div>
  );
};

export default DogCard;