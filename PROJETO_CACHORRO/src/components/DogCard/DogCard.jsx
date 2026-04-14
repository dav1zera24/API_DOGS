import './DogCard.css';

const DogCard = ({ imageUrl }) => {
  // Lógica para extrair a raça da URL
  // A URL da API segue o padrão: https://images.dog.ceo/breeds/nome-da-raca/imagem.jpg
  const urlParts = imageUrl.split('/');
  const breedRaw = urlParts[4]; // O nome da raça está sempre na 5ª posição (índice 4)
  
  // Limpa o nome (remove hífens e deixa a primeira letra maiúscula)
  const breedName = breedRaw.replace('-', ' ').toUpperCase();

  return (
    <div className="dog-card">
      {/* 1° Campo: Imagem Dinâmica */}
      <img 
        src={imageUrl} 
        alt={`Um cachorro da raça ${breedName}`} 
        className="dog-image"
      />
      
      {/* 2° Campo: Nome da Raça Dinâmica */}
      <div className="dog-info">
        <h2 className="dog-breed-title">{breedName}</h2>
      </div>
    </div>
  );
};

export default DogCard;