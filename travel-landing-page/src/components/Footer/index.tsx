import CopyRight from "./CopyRight";
import SettingLanguage from "./SettingLanguage";
import TopNav from "./TopNav";
import Testimonials from "./Testimonials";

const Footer = () => {
  return (
    <footer className="w-full">
      <Testimonials />
      <TopNav />
      <div className="border-t border-[#d8d8d8]" />
      <SettingLanguage />
      <div className="border-t border-[#d8d8d8]" />
      <CopyRight />
    </footer>
  );
};

export default Footer;
