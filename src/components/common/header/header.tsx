"use client";

import { fetchIndustryAPI } from "@api/industry";
import { serviceMenu } from "@utils/constants";
import { Image } from 'astro:assets';
import { RightArrowIcon } from "public/theme/icons/rightArrowIcon";
import React, { useContext, useEffect, useRef, useState } from "react";

import headerStyles from "./headerstyle.module.scss";
import PrimaryButton from "../primaryButton.astro";

export const Header = () => {

    const currentURL = "window.location.href";

    const [isServiceOpen, setServiceOpen] = useState(false);
    const [isIndustryMenu, setisIndustryMenu] = useState(false);
    const [isService, setIsService] = useState(false);
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);
    const [industryData, setIndustryData] = useState<any>(null);
    // const { collapsed, setCollapsed, scrollToSection }: LayoutContextModel =
    //     useContext(LayoutContext);
    const collapsed = true;


    const headerMenu = [
        {
            label: "Explore AI",
            url: "/services/ai-development",
        },
        {
            label: "Services",
            url: "/#service",
        },
        {
            label: "Industry",
            url: "/#industries",
        },
        {
            label: "Case Study",
            url: "/case-study",
        },
        {
            label: "Blogs",
            url: "/blog",
        },
        {
            label: "About Us",
            url: "/about-us",
        },
    ];
    const mobileHeaderMenu = [
        {
            label: "Explore AI",
            url: "/services/ai-development",
        },
        {
            label: "Services",
            url: "/#service",
        },
        {
            label: "Industry",
            url: "/#industries",
        },
        {
            label: "Case Study",
            url: "/case-study",
        },
        {
            label: "Blogs",
            url: "/blog",
        },
        {
            label: "About Us",
            url: "/about-us",
        },
    ];
    const popupRef: React.RefObject<HTMLDivElement> = useRef(null);

    const getIndustries = async () => {
        try {
            const response = await fetchIndustryAPI({});
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            setIndustryData(data);
            if (data?.data.length > 0) {
                return data;
            }
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        getIndustries();
    }, []);

    // useOutsideClick([popupRef], (e) => {
    //     if (isServiceOpen) {
    //         setServiceOpen(false);
    //     }
    // });
    // useOutsideClick([popupRef], (e) => {
    //     if (isIndustryMenu) {
    //         setisIndustryMenu(false);
    //     }
    // });

    return (
        <>
            <header className="sticky top-0 z-[11] overflow-hidden">
                <div className="backdrop-blur-md inset-x-0 bottom-[-50%] top-[-1px] absolute"></div>
                <nav className="relative max-w-[1170px] mx-auto">
                    <div className="md:container md:px-auto mx-auto flex items-center justify-between p-4 md:py-6">
                        <a href="/" className="flex items-center">
                            <Image
                                src="/linearloop-logo.svg"
                                width={152}
                                height={31}
                                alt="Logo"
                            />
                        </a>
                        <div
                            className="lg:hidden cursor-pointer"
                        // onClick={() => setCollapsed(true)}
                        >
                            {/* <MenuIcon /> */}
                        </div>
                        <div
                            className="hidden w-full lg:block md:w-auto"
                            id="navbar-default"
                        >
                            <div className="flex items-center justify-center relative">
                                {headerMenu.map((menu) => {
                                    return (
                                        <p
                                            key={menu.label}
                                            className="px-3 py-1 h-fit"
                                        >
                                            <a
                                                href={menu?.url}
                                                onClick={(e: any) => {
                                                    if (
                                                        menu.label ===
                                                        "Services"
                                                    ) {
                                                        e.preventDefault();
                                                        setServiceOpen(true);
                                                        setisIndustryMenu(
                                                            false,
                                                        );
                                                    } else {
                                                        if (
                                                            menu.label ===
                                                            "Industry"
                                                        ) {
                                                            e.preventDefault();
                                                            setisIndustryMenu(
                                                                true,
                                                            );
                                                            setServiceOpen(
                                                                false,
                                                            );
                                                        }
                                                    }
                                                }}
                                                className={`hover:text-secondary`}
                                            >
                                                <div
                                                    className={`cursor-pointer`}
                                                >
                                                    <span
                                                        className={`${currentURL ==
                                                            menu?.url &&
                                                            "!text-secondary hover:!text-secondary"
                                                            } flex font-normal items-center text-base`}
                                                    >
                                                        {menu.label}
                                                        {/* {menu.label ==
                                                            "Explore AI" && (
                                                            // <AIStarIcon
                                                            //     className={`mb-2 ${headerStyles.blink}`}
                                                            // />
                                                        )} */}
                                                        {menu.label ==
                                                            "Services" && (
                                                                <RightArrowIcon
                                                                    className={`transform transition-transform duration-500 ${isServiceOpen
                                                                        ? "-rotate-90"
                                                                        : "rotate-90"
                                                                        } hover:text-secondary mt-1`}
                                                                />
                                                            )}
                                                        {menu.label ==
                                                            "Industry" && (
                                                                <RightArrowIcon
                                                                    className={`transform transition-transform duration-500 ${isIndustryMenu
                                                                        ? "-rotate-90"
                                                                        : "rotate-90"
                                                                        } hover:text-secondary mt-1`}
                                                                />
                                                            )}
                                                    </span>
                                                </div>
                                            </a>
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <a
                            href="/contact-us"
                            className="pl-3 lg:block hidden"
                        >
                            <PrimaryButton
                                btnClass="btn-primary px-4 py-1.5 !text-sm  lg:block hidden"
                                text="Contact Us"
                            />
                        </a>
                    </div>
                </nav>
            </header>
            {/* {isServiceOpen && (
                <div
                    className={`fixed top-20 left-[25%] z-30 h-64 ${
                        isServiceOpen && "active"
                    }`}
                    ref={popupRef}
                >
                    <ServiceMenuComponent
                        {...{
                            setServiceOpen,
                        }}
                    />
                </div>
            )} */}
            {isIndustryMenu && (
                <div
                    className={`fixed top-20 left-[25%] z-30 h-64 ${isIndustryMenu && "active"
                        }`}
                    ref={popupRef}
                >
                    {/* <IndustryMenuComponent
                        {...{
                            industryData,
                            setisIndustryMenu,
                        }}
                    /> */}
                </div>
            )}

            <div
                className={`lg:hidden block relative z-20 ease-in-out duration-500 ${!collapsed && "opacity-0 invisible"
                    }`}
                aria-labelledby="slide-over-title"
                role="dialog"
                aria-modal="true"
            >
                <div
                    className={`fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity ease-in-out duration-500 ${!collapsed ? " opacity-0" : "visible"
                        }`}
                ></div>
                <div className="fixed top-[15px] inset-0 overflow-hidden px-4">
                    <div className="flex items-center justify-end pl-6 mb-16">
                        <div
                            onClick={() => {

                                setIsService(false);
                                setIsIndustryOpen(false);
                            }}
                            className="p-2 cursor-pointer"
                        >
                            {/* <CrossOutlinedIcon className="w-4 h-4" /> */}
                        </div>
                    </div>
                    <div className="bg-[#0B0B22] border border-[#222243] rounded-xl px-3 py-6">
                        <div>
                            <ul className="grid overflow-auto max-h-[calc(100vh - 130px)]">
                                {mobileHeaderMenu.map((menu) => {
                                    return (
                                        <li
                                            key={menu.label}
                                            className="px-6 py-[13px] border-b border-white/10"
                                        >
                                            <a
                                                href={menu?.url}
                                                onClick={(e: any) => {
                                                    if (
                                                        menu.label ===
                                                        "Services"
                                                    ) {
                                                        setIsService(
                                                            !isService,
                                                        );
                                                        setIsIndustryOpen(
                                                            false,
                                                        );
                                                    }
                                                    if (
                                                        menu.label ===
                                                        "Industry"
                                                    ) {
                                                        setIsIndustryOpen(
                                                            !isIndustryOpen,
                                                        );
                                                        setIsService(false);
                                                    }
                                                }}
                                                className={`${currentURL === menu?.url &&
                                                    "text-secondary"
                                                    } hover:text-secondary`}
                                            >
                                                <span
                                                    className="font-medium text-base"
                                                    onClick={() => {
                                                        // scrollToSection(
                                                        //     menu.url,
                                                        // );
                                                        if (
                                                            menu.label ===
                                                            "Services" ||
                                                            menu.label ===
                                                            "Industry"
                                                        ) {
                                                            // setCollapsed(true);
                                                        } else {
                                                            // setCollapsed(false);
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className={`flex font-normal justify-between ${menu.label === "AI"
                                                            ? "aiGradient font-semibold"
                                                            : "text-white"
                                                            }`}
                                                        onClick={() => {
                                                            // setCollapsed(false);
                                                        }}
                                                    >
                                                        {menu.label}
                                                        {menu.label ===
                                                            "Services" && (
                                                                <RightArrowIcon
                                                                    className={`transform transition-transform duration-500 ${isService
                                                                        ? "-rotate-90"
                                                                        : "rotate-90"
                                                                        } hover:text-secondary`}
                                                                />
                                                            )}
                                                        {menu.label ===
                                                            "Industry" && (
                                                                <RightArrowIcon
                                                                    className={`transform transition-transform duration-500 ${isIndustryOpen
                                                                        ? "-rotate-90"
                                                                        : "rotate-90"
                                                                        } hover:text-secondary`}
                                                                />
                                                            )}
                                                    </div>
                                                </span>
                                            </a>
                                            {/* Display services submenu below label */}
                                            <div>
                                                {isService &&
                                                    menu.label ===
                                                    "Services" && (
                                                        <div className="bg-[#0E1330] border border-[#282D45] rounded-xl mt-5 max-h-[300px] overflow-auto">
                                                            <ul className="modern-scrollbar">
                                                                {serviceMenu.map(
                                                                    (
                                                                        submenu,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                submenu.title
                                                                            }
                                                                            className="px-6 py-[13px] border-b border-white/10"
                                                                        >
                                                                            <a
                                                                                href={`${submenu?.url}`}
                                                                                className={`${currentURL ===
                                                                                    submenu.url &&
                                                                                    "text-secondary"
                                                                                    } hover:text-secondary`}
                                                                            >
                                                                                <span
                                                                                    className="font-medium text-sm ml-3"
                                                                                // onClick={() =>
                                                                                //     // setCollapsed(
                                                                                //     //     false,
                                                                                //     // )
                                                                                // }
                                                                                >
                                                                                    <div className="flex items-start">
                                                                                        <div className="mr-2">
                                                                                            {
                                                                                                submenu?.slug
                                                                                            }
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-xs !font-semibold text-white">
                                                                                                {
                                                                                                    submenu?.title
                                                                                                }
                                                                                            </p>
                                                                                            <p className="text-[#C5C5C5] text-[11px] font-normal pt-1">
                                                                                                {
                                                                                                    submenu?.des
                                                                                                }
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                            </div>
                                            <div>
                                                {isIndustryOpen &&
                                                    menu.label ===
                                                    "Industry" && (
                                                        <div className="bg-[#0E1330] border border-[#282D45] rounded-xl mt-5 max-h-[300px] overflow-auto">
                                                            <ul className="modern-scrollbar">
                                                                {industryData?.data?.map(
                                                                    (
                                                                        s: any,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                s.title
                                                                            }
                                                                            className="px-6 py-[13px] border-b border-white/10"
                                                                        >
                                                                            <a
                                                                                href={`/industries/${s?.attributes?.Slug}`}
                                                                                className={`${currentURL ===
                                                                                    s.url &&
                                                                                    "text-secondary"
                                                                                    } hover:text-secondary`}
                                                                            >
                                                                                <span
                                                                                    className="font-medium text-sm ml-3"
                                                                                // onClick={() =>
                                                                                //     // setCollapsed(
                                                                                //     //     false,
                                                                                //     // )
                                                                                // }
                                                                                >
                                                                                    <div className="flex gap-2 items-start">
                                                                                        <div className="mt-1">
                                                                                            <Image
                                                                                                src={
                                                                                                    s
                                                                                                        ?.attributes
                                                                                                        ?.Icon
                                                                                                        ?.data
                                                                                                        ?.attributes
                                                                                                        ?.url
                                                                                                }
                                                                                                alt=""
                                                                                                height={
                                                                                                    32
                                                                                                }
                                                                                                width={
                                                                                                    24
                                                                                                }
                                                                                            />
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-xs !font-semibold text-white">
                                                                                                {
                                                                                                    s
                                                                                                        ?.attributes
                                                                                                        ?.Name
                                                                                                }
                                                                                            </p>
                                                                                            <p
                                                                                                className="text-[#C5C5C5] text-[11px] font-normal pt-1"
                                                                                                dangerouslySetInnerHTML={{
                                                                                                    __html: `${s?.attributes?.Description}`,
                                                                                                }}
                                                                                            ></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                            </div>
                                        </li>
                                    );
                                })}
                                <a
                                    href="/contact-us"
                                // onClick={() => setCollapsed(false)}
                                >
                                    <PrimaryButton
                                        btnClass="btn-primary py-[10px] px-4 !text-sm w-full mt-5"
                                        text="Contact Us"
                                    />
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
