import Layout from "@/layout";

const EquipmentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout>{children}</Layout>;
};

export default EquipmentLayout;
