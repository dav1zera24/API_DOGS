const FetchButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {disabled ? "Carregando..." : "Buscar Novo Doguinho"}
    </button>
  );
};

export default FetchButton;