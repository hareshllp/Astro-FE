
// import {
//     LayoutContext,
//     LayoutContextModel,
// } from "@/app/contexts/layoutContext";

import React, { useContext, useEffect, useRef, useState } from "react";

import { serviceMenu } from "@utils/constants";
import ServiceMenuComponent from "@components/home/serviceMenuComponent";
import IndustryMenuComponent from "@components/home/industryMenu";

export const Header = ({ industryData, blogs }: any) => {
    const router = "/";
    const [isServiceOpen, setServiceOpen] = useState(false);

    const [isService, setIsService] = useState(false);
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);
    // const [industryData, setIndustryData] = useState<any>(null);
    // const { collapsed, setCollapsed, scrollToSection }: LayoutContextModel =
    //     useContext(LayoutContext);
    let isIndustryMenu = false;
    let collapsed = false;
    const setCollapsed = () => true;
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId.slice(2));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
            const yOffset = -103;
            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

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




    return (
        <>
            <header className="sticky top-0 z-[11] overflow-hidden">
                <div className="backdrop-blur-md inset-x-0 bottom-[-50%] top-[-1px] absolute"></div>
                <nav className="relative max-w-[1170px] mx-auto">
                    <div className="md:container md:px-auto mx-auto flex items-center justify-between p-4 md:py-6">
                        <a href="/" className="flex items-center">
                            <img
                                src="/linearloop-logo.svg"
                                width={152}
                                height={31}
                                alt="Logo"
                            />
                        </a>
                        <div
                            className="lg:hidden cursor-pointer"
                            onClick={() => collapsed = false}
                        >

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
                                                        
                                                    } else {
                                                        if (
                                                            menu.label ===
                                                            "Industry"
                                                        ) {
                                                            e.preventDefault();
                                                            
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
                                                        className={`${router ==
                                                            menu?.url &&
                                                            "!text-secondary hover:!text-secondary"
                                                            } flex font-normal items-center text-base`}
                                                    >
                                                        {menu.label}
                                                        {menu.label ==
                                                            "Explore AI" && (
                                                                <svg
                                                                    width={16}
                                                                    height={15}
                                                                    viewBox="0 0 16 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M1.72106 3.64696C1.53235 3.57417 1.33625 3.5169 1.13416 3.47662C1.11932 3.47367 1.10445 3.4708 1.08954 3.46802C0.954527 3.44289 0.954527 3.24081 1.08954 3.21568C1.10445 3.2129 1.11932 3.21003 1.13416 3.20709C1.33625 3.1668 1.53235 3.10953 1.72106 3.03675C1.834 2.99318 1.94428 2.94407 2.05162 2.88969C2.79496 2.51321 3.39696 1.88509 3.7578 1.10949C3.8099 0.99749 3.85699 0.882418 3.89872 0.764581C3.96848 0.567681 4.02337 0.363067 4.06198 0.152204C4.0648 0.136723 4.06755 0.121208 4.07021 0.105658C4.0943 -0.0352194 4.28797 -0.0352194 4.31206 0.105658C4.31473 0.121208 4.31747 0.136723 4.3203 0.152204C4.35891 0.363067 4.41379 0.567681 4.48355 0.764581C4.5253 0.882416 4.57237 0.99749 4.62449 1.10949C4.98531 1.88509 5.58731 2.51321 6.33066 2.88969C6.438 2.94407 6.54828 2.99318 6.66121 3.03675C6.84993 3.10953 7.04602 3.1668 7.24813 3.20709C7.26297 3.21003 7.27783 3.2129 7.29273 3.21568C7.42775 3.24081 7.42775 3.44289 7.29273 3.46802C7.27783 3.4708 7.26297 3.47367 7.24813 3.47662C7.04602 3.5169 6.84993 3.57417 6.66121 3.64696C6.54828 3.69052 6.438 3.73963 6.33066 3.79401C5.58731 4.17049 4.98531 4.79861 4.62449 5.57422C4.57237 5.68622 4.5253 5.80129 4.48355 5.91912C4.41379 6.11602 4.35891 6.32063 4.3203 6.53151C4.31747 6.54697 4.31473 6.56249 4.31206 6.57804C4.28797 6.71893 4.0943 6.71893 4.07021 6.57804C4.06755 6.56249 4.0648 6.54697 4.06198 6.53151C4.02337 6.32063 3.96848 6.11602 3.89872 5.91912C3.85699 5.80129 3.8099 5.68622 3.7578 5.57422C3.39696 4.79861 2.79496 4.17049 2.05162 3.79401C1.94428 3.73963 1.834 3.69052 1.72106 3.64696ZM6.23273 8.65294C6.10075 8.61583 5.96693 8.58326 5.83143 8.55541C5.81024 8.55107 5.78904 8.54684 5.76779 8.54271L5.76135 8.54146L5.75263 8.5398C5.73923 8.53725 5.7245 8.53451 5.69506 8.52901L5.68478 8.5271C5.46885 8.48447 5.46885 8.16184 5.68478 8.11921L5.69506 8.1173C5.7245 8.1118 5.73923 8.10906 5.75263 8.10651L5.76135 8.10485L5.76779 8.1036C5.78904 8.09947 5.81024 8.09524 5.83141 8.0909C5.96691 8.06305 6.10075 8.03048 6.23273 7.99337C6.34546 7.96168 6.45686 7.92664 6.56682 7.88841C8.3459 7.26963 9.74585 5.80893 10.3389 3.95264C10.3755 3.83791 10.4091 3.72167 10.4395 3.60403C10.4751 3.46634 10.5063 3.3267 10.533 3.18531C10.5371 3.16323 10.5412 3.1411 10.5451 3.11894L10.5463 3.11221L10.5479 3.10312C10.5503 3.0893 10.553 3.07413 10.5581 3.04409L10.5583 3.04306L10.5601 3.03232C10.601 2.80702 10.9102 2.80702 10.951 3.03232L10.9529 3.04306C10.9581 3.07377 10.9607 3.08913 10.9632 3.10312L10.9648 3.11221L10.966 3.11894C10.9699 3.1411 10.974 3.16323 10.9781 3.18531C11.0048 3.32672 11.0361 3.46634 11.0716 3.60403C11.102 3.72167 11.1356 3.83791 11.1722 3.95264C11.7653 5.80893 13.1652 7.26963 14.9443 7.88841C15.0543 7.92664 15.1657 7.96168 15.2784 7.99337C15.4104 8.03048 15.5442 8.06305 15.6797 8.0909C15.7009 8.09524 15.7221 8.09947 15.7433 8.1036L15.7498 8.10485L15.7585 8.10651C15.7719 8.10906 15.7866 8.1118 15.816 8.1173L15.8263 8.11921C16.0423 8.16184 16.0423 8.48447 15.8263 8.5271L15.816 8.52901L15.7849 8.53482L15.7585 8.5398L15.7498 8.54146L15.7433 8.54271C15.7221 8.54684 15.7009 8.55107 15.6797 8.55541C15.5442 8.58326 15.4104 8.61583 15.2784 8.65294C15.1657 8.68463 15.0543 8.71967 14.9443 8.7579C13.1652 9.37668 11.7653 10.8374 11.1722 12.6937C11.1356 12.8084 11.102 12.9246 11.0716 13.0423C11.0361 13.18 11.0048 13.3196 10.9781 13.461C10.974 13.4831 10.9699 13.5052 10.966 13.5274L10.9648 13.5341L10.9632 13.5432L10.9596 13.5637L10.9531 13.6021L10.951 13.614C10.9102 13.8393 10.601 13.8393 10.5601 13.614L10.5583 13.6033C10.553 13.5726 10.5504 13.5572 10.5479 13.5432L10.5463 13.5341L10.5451 13.5274C10.5412 13.5052 10.5371 13.4831 10.533 13.461C10.5063 13.3196 10.4751 13.18 10.4395 13.0423C10.4091 12.9246 10.3755 12.8084 10.3389 12.6937C9.74585 10.8374 8.3459 9.37668 6.56682 8.7579C6.45686 8.71967 6.34546 8.68463 6.23273 8.65294ZM3.25503 12.9745C3.48198 13.0197 3.69695 13.0989 3.895 13.2067C3.9831 13.2547 4.06784 13.3084 4.14879 13.3673C4.37434 13.5313 4.57046 13.736 4.72773 13.9713C4.78416 14.0558 4.8356 14.1442 4.88157 14.2361C4.98497 14.4428 5.06082 14.6671 5.10417 14.9039C5.10596 14.9137 5.10771 14.9234 5.10938 14.9333C5.1246 15.0222 5.24691 15.0222 5.26213 14.9333C5.2638 14.9234 5.26553 14.9137 5.26732 14.9039C5.31069 14.6671 5.38654 14.4428 5.48992 14.2361C5.53591 14.1442 5.58735 14.0558 5.64378 13.9713C5.80103 13.736 5.99717 13.5313 6.22272 13.3673C6.30367 13.3084 6.38841 13.2547 6.47649 13.2067C6.67456 13.0989 6.88953 13.0197 7.11648 12.9745C7.12585 12.9726 7.13524 12.9708 7.14465 12.969C7.22993 12.9532 7.22993 12.8255 7.14465 12.8097C7.13524 12.8079 7.12585 12.8061 7.11648 12.8042C6.88953 12.759 6.67456 12.6798 6.47649 12.572C6.38841 12.524 6.30367 12.4703 6.22272 12.4114C5.99717 12.2474 5.80103 12.0427 5.64378 11.8074C5.58735 11.7229 5.53591 11.6345 5.48992 11.5426C5.38654 11.336 5.31069 11.1116 5.26732 10.8748C5.26553 10.8651 5.2638 10.8553 5.26213 10.8454C5.24691 10.7565 5.1246 10.7565 5.10938 10.8454C5.10771 10.8553 5.10596 10.8651 5.10417 10.8748C5.06082 11.1116 4.98497 11.336 4.88157 11.5426C4.8356 11.6345 4.78416 11.7229 4.72773 11.8074C4.57046 12.0427 4.37434 12.2474 4.14879 12.4114C4.06784 12.4703 3.9831 12.524 3.895 12.572C3.69695 12.6798 3.48198 12.759 3.25503 12.8042C3.24566 12.8061 3.23627 12.8079 3.22684 12.8097C3.14158 12.8255 3.14158 12.9532 3.22684 12.969C3.23627 12.9708 3.24566 12.9726 3.25503 12.9745Z"
                                                                        fill="url(#paint0_linear_675_16371)"
                                                                    />
                                                                    <defs>
                                                                        <linearGradient
                                                                            id="paint0_linear_675_16371"
                                                                            x1={2.83806}
                                                                            y1={9.58333}
                                                                            x2={9.23552}
                                                                            y2={9.63136}
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop stopColor="#16FCD2" />
                                                                            <stop offset={1} stopColor="#65B5FF" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>

                                                            )}
                                                        {/* {menu.label ==
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
                                                            )} */}
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
                            <button className="btn-primary py-[10px] px-4 !text-sm w-full mt-5">Contact Us</button>
                            {/* <PrimaryButton
                                btnClass="btn-primary px-4 py-1.5 !text-sm  lg:block hidden"
                                text="Contact Us"
                            /> */}
                        </a>
                    </div>
                </nav>
            </header>
            {isServiceOpen && (
                <div
                    className={`fixed top-20 left-[25%] z-30 h-64 ${isServiceOpen && "active"
                        }`}
                    ref={popupRef}
                >
                    <ServiceMenuComponent
                        {...{
                            blogs,
                        }}
                    />
                </div>
            )}
            {isIndustryMenu && (
                <div
                    className={`fixed top-20 left-[25%] z-30 h-64 ${isIndustryMenu && "active"
                        }`}
                    ref={popupRef}
                >
                    <IndustryMenuComponent
                        {...{
                            industryData,
                        }}
                    />
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
                                collapsed = false;
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
                                                className={`${router === menu?.url &&
                                                    "text-secondary"
                                                    } hover:text-secondary`}
                                            >
                                                <span
                                                    className="font-medium text-base"
                                                    onClick={() => {
                                                        scrollToSection(
                                                            menu.url,
                                                        );
                                                        if (
                                                            menu.label ===
                                                            "Services" ||
                                                            menu.label ===
                                                            "Industry"
                                                        ) {
                                                            collapsed = true;
                                                        } else {
                                                            collapsed = false;
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className={`flex font-normal justify-between ${menu.label === "AI"
                                                            ? "aiGradient font-semibold"
                                                            : "text-white"
                                                            }`}
                                                        onClick={() => {
                                                            collapsed = false;
                                                        }}
                                                    >
                                                        {menu.label}
                                                        {/* {menu.label ===
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
                                                            )} */}
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
                                                                                className={`${router ===
                                                                                    submenu.url &&
                                                                                    "text-secondary"
                                                                                    } hover:text-secondary`}
                                                                            >
                                                                                <span
                                                                                    className="font-medium text-sm ml-3"
                                                                                    onClick={() =>

                                                                                        collapsed = false
                                                                                    }
                                                                                >
                                                                                    <div className="flex items-start">
                                                                                        <div className="mr-2">

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
                                                                                className={`${router ===
                                                                                    s.url &&
                                                                                    "text-secondary"
                                                                                    } hover:text-secondary`}
                                                                            >
                                                                                <span
                                                                                    className="font-medium text-sm ml-3"
                                                                                    onClick={() =>
                                                                                        collapsed = false
                                                                                    }
                                                                                >
                                                                                    <div className="flex gap-2 items-start">
                                                                                        <div className="mt-1">
                                                                                            <img
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
                                    onClick={() => collapsed = false}
                                >
                                    <button className="btn-primary py-[10px] px-4 !text-sm w-full mt-5">Contact Us</button>

                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
