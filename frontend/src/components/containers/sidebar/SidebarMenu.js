import React from "react";
import options from "./options";
import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenu() {
  const { AdminMenu } = options;
  return (
    <div>
      {AdminMenu.map((singleOption) => {
        return (
          <SidebarMenuItem key={singleOption.key} options={singleOption} />
        );
      })}
    </div>
  );
}
