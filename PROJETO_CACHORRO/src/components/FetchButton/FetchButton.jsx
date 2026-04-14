import './FetchButton.css';

const FetchButton = ({ onClick, disabled }) => {
  return (
    <div className="button-container">
      <button 
        className="fetch-button" 
        onClick={onClick} 
        disabled={disabled}
      >
        {disabled ? "Buscando..." : "Gerar Novo Doguinho"}
      </button>
    </div>
  );
};

export default FetchButton;