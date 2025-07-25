import Layout from "@/layout";

const CampingLocationsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout>{children}</Layout>;
};

export default CampingLocationsLayout;
