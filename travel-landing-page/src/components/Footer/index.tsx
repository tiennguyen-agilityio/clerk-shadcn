import CopyRight from "./CopyRight";
import SettingLanguage from "./SettingLanguage";
import TopNav from "./TopNav";
import Testimonials from "./Testimonials";

const Footer = () => {
  return (
    <footer className="w-full">
      <Testimonials />
      <TopNav />
      <div className="border-t border-ring" />
      <SettingLanguage />
      <div className="border-t border-ring" />
      <CopyRight />
    </footer>
  );
};

export default Footer;
