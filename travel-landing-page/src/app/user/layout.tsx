const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      {children}
    </div>
  );
};

export default UserLayout;
