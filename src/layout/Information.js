export const Information = () => {
    return (
       
      <div className="bg-blue-900 w-[1440px] flex justify-center items-center">
        
        <div>
        <p className="text-lg font-bold">About me</p>
        
        </div>
        <div className="w-[300px] h-[292px] gap-6 flex">
          <img src="image2.png" alt="Information" className="w-full h-full object-cover" />
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-sm text-gray-500">Additional Details</p>
          </div>
        </div>
      </div>
    );
  };
  