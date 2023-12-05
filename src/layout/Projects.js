const Projects = () => {
    return (
      <div className="bg-green-300 w-[1440px] flex justify-center items-center pb-1 ">
        <div className="w-[300px] gap-6 flex flex-col items-center">
  
          
          <div className="w-full bg-white mb-4 p-4 flex items-center mt-6">
            <img src="workintech.png" alt="Card 1" className="w-[100px] h-[100px] object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Workintech</p>
              <p className="text-sm text-gray-500">Additional Details 1</p>
            </div>
          </div>
  
       
          <div className="w-full bg-white p-4 flex items-center">
            <img src="journey.png" alt="Card 2" className="w-[100px] h-[100px] object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Journey</p>
              <p className="text-sm text-gray-500">Additional Details 2</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  