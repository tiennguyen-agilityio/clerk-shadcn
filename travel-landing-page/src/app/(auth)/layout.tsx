const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit pb-15 pt-35">{children}</div>
  );
};

export default AuthLayout;
