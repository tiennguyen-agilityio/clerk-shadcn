import Layout from "@/layout";

const WaitListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout hasBorderBottomHeader>{children}</Layout>;
};

export default WaitListLayout;
