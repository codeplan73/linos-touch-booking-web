import React from "react";
import SettingLink from "./_components/SettingLink";
import BreadCumNav from "@/components/BreadCumNav";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <BreadCumNav dashboard="dashoard" currentPage="settings" />
      <div>
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="text-slate-400 text-xs">All System Settings</p>
      </div>

      <SettingLink />
    </div>
  );
};

export default SettingsPage;
