import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "States",
    path: "/states",
    icon: <FaIcons.FaFlagUsa />,
    cName: "nav-text",
  },
  {
    title: "Guess",
    path: "/guess",
    icon: <FaIcons.FaQuestion />,
    cName: "nav-text",
  },
];
