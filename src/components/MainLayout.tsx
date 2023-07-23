const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col text-center sm:w-[480px] w-[300px] sm:mb-32 mb-16 sm:mt-24 mt-16 select-none">
      {children}
    </div>
  );
};

export default MainLayout;
