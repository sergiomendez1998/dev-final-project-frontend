export const LoadingComponent = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center">
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
        <h3 className="text-center font-bold">Cargando...</h3>
      </div>
    </div>
  );
};
