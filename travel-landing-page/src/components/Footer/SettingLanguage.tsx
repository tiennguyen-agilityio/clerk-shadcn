import React from "react";

import Logo from "../Logo";
import DiscoverIcon from "../Icons/DiscoverIcon";
import MasterCardIcon from "../Icons/MasterCardIcon";
import MPesaIcon from "../Icons/MPesaIcon";
import PaypalIcon from "../Icons/PaypalIcon";
import VisaIcon from "../Icons/VisaIcon";

const SettingLanguage = () => {
  return (
    <div className="container flex items-center mx-auto h-24 ">
      <Logo className="text-teal-600 text-xl lg:text-2xl" />

      <div className="flex gap-7.5 ml-auto mr-5">
        <MPesaIcon />
        <DiscoverIcon />
        <VisaIcon />
        <PaypalIcon />
        <MasterCardIcon />
      </div>

      <div className="flex gap-2.5">
        <select className="border rounded px-2 py-1 text-[13px]">
          <option className="text-[13px]">English (United States)</option>
        </select>
        <select className="border rounded px-2 py-1 text-[13px]">
          <option className="text-[13px]">KES</option>
        </select>
      </div>
    </div>
  );
};

export default SettingLanguage;
