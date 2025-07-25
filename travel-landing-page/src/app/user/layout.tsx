import Layout from "@/layout";

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout hasBorderBottomHeader>
      <div className="flex flex-col items-center justify-center h-fit py-15 pt-35">{children}</div>
    </Layout>
  );
};

export default UserLayout;
