import Layout from "@/layout";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout hasBorderBottomHeader>
      <div className="flex flex-col items-center justify-center h-fit pb-15 pt-55 md:pt-45">
        {children}
      </div>
    </Layout>
  );
};

export default AuthLayout;
