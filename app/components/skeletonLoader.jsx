const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        <div className="h-64 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-300 rounded-md w-1/4 mb-4"></div>
        <div className="flex space-x-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 w-6 bg-gray-300 rounded-full"></div>
          ))}
        </div>
        <div className="h-10 bg-gray-300 rounded-md w-1/4"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;