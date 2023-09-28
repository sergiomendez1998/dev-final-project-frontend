export const LoadingComponent = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="text-center text-2xl font-bold">Cargando...</h3>
      </div>
    </div>
  );
};
