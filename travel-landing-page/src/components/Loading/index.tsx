const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-blue-500" />
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
};

export default Loading;
