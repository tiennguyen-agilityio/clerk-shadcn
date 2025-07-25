import Layout from "@/layout";

const ActivitiesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout>{children}</Layout>;
};

export default ActivitiesLayout;
