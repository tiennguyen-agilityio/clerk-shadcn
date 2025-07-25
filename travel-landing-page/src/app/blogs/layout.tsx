import Layout from "@/layout";

const BLogsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout>{children}</Layout>;
};

export default BLogsLayout;
