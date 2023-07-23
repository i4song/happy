const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col text-center sm:w-[480px] w-[300px] sm:mb-32 mb-16 mt-20 select-none">
      {children}
    </div>
  );
};

export default MainLayout;
