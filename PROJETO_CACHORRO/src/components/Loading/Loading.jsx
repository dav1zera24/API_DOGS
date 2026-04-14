import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Um círculo de carregamento (spinner) */}
      <div className="spinner"></div>
      <p className="loading-text">Buscando seu doguinho...</p>
    </div>
  );
};

export default Loading;