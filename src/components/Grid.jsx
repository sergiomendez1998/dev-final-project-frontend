
const GridTemplate = () => {
  return (
    <div className="container mx-auto">
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> 
        <div className="bg-gray-200 p-4">1 of 4</div>
        <div className="bg-gray-200 p-4">2 of 4 (wider)</div>
        <div className="bg-gray-200 p-4">3 of 4</div>
        <div className="bg-gray-200 p-4">4 of 4</div>
      </div>
    </div>
  );
};

export default GridTemplate;
