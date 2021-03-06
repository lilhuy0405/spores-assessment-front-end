import {DashboardOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

export const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: "bx bx-category-alt",
        subMenus: [],
    },
    {
        title: "NFT Items",
        href: "/nft-items",
        icon: "bx bx-package",
        subMenus: [
            {
                title: "List Items",
                href: "/nft-items",
                icon: "bx bx-list-ul",
                subMenus: [],
            },

            {
                title: "Create Item",
                href: "/nft-items/create",
                icon: "bx bx-add-to-queue",
                subMenus: [],
            }
        ]
    },

    {
        title: "Auction",
        href: "/auction",
        icon: "bx bx-shopping-bag",
        subMenus: [
            {
                title: "Create Auction",
                href: "/nft-items/create?mode=auction",
                icon: "bx bx-add-to-queue",
                subMenus: [],
            },

        ]
    },
]
