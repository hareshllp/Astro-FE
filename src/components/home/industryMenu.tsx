
import React, { useEffect, useState } from "react";




interface IndustryMenuProps {

    industryData: any;
}

const IndustryMenuComponent = (props: IndustryMenuProps) => {
    const { industryData } = props;
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isMouseOverList, setIsMouseOverList] = useState(false);
    const [isMouseOverImage, setIsMouseOverImage] = useState(false);
    const [blogs, setBlogs] = useState<any>();
    const [showCaseStudy, setShowCaseStudy] = useState(true);

    const handleMouseEnterList = (index: any) => {
        setHoveredIndex(index);
        setIsMouseOverList(true);
    };

    const handleMouseLeaveList = () => {
        setIsMouseOverList(false);
    };

    const handleMouseEnterImage = () => {
        setIsMouseOverImage(true);
    };

    const handleMouseLeaveImage = () => {
        setIsMouseOverImage(false);
        if (!isMouseOverList) {
            setHoveredIndex(0);
        }
    };

    const industryDataconst = {
        data: [
            {
                hoverImage: "/industries/header/healthcare-blog.webp",
                hoverTitle:
                    "What is the Role of Generative AI in Healthcare and Medicine Industry?",
                hoverDescription:
                    "The growth in technology has impacted various industries and healthcare is no exception...",
                hoverLink:
                    "/blog/role-of-generative-ai-in-healthcare-and-medicine",
            },
            {
                hoverImage: "/industries/header/saas-product-blog.webp",
                hoverTitle:
                    "SaaS Product Development Checklist: From Idea to Launch",
                hoverDescription:
                    "Software as a service (SaaS) is a booming industry, with more and more businesses...",
                hoverLink: "/blog/saas-product-development-checklist",
            },
            {
                hoverImage:
                    "/industries/header/financial-software-development-blog.webp",
                hoverTitle: "Complete Guide to Financial Software Development",
                hoverDescription:
                    "Financial software is a crucial tool for any business that manages finances, whether...",
                hoverLink: "/blog/financial-software-development-guide",
            },
            {
                hoverImage: "/industries/header/headless-ecommerce-blog.webp",
                hoverTitle:
                    "The Future of Digital Commerce: How Headless eCommerce Can Scale",
                hoverDescription:
                    "Headless Commerce is a software platform that helps separate concerns between the two...",
                hoverLink: "/blog/headless-commerce",
            },
        ],
    };

    const defaultHoverContent = {
        hoverImage: "/navigation/kukuFM.svg", // Provide a default image
        hoverTitle: "Default Title",
        hoverDescription: "Default description.",
        hoverLink: "/",
    };

    const hoverContent =
        hoveredIndex !== null
            ? industryDataconst.data[hoveredIndex]
            : defaultHoverContent;




    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowCaseStudy((prev) => !prev);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <div className="hidden lg:flex gap-4 bg-[#0E1330] border border-[#282D45] headerMenu text-white rounded-md w-[870px]">
                <div className="flex">
                    <div
                        className="w-1/2 py-4"
                        onMouseEnter={() => setIsMouseOverList(true)}
                        onMouseLeave={handleMouseLeaveList}
                    >
                        {industryData?.data?.map((s: any, index: any) => (
                            <a
                                key={index}
                                href={`/industries/${s?.attributes?.Slug}`}
                                onClick={() => {

                                }}
                            >
                                <div
                                    className="px-[25px]"
                                    onMouseEnter={() =>
                                        handleMouseEnterList(index)
                                    }
                                >
                                    <div className="flex gap-4 border-b border-white/10 p-5 btn-three">
                                        <div className="mt-1">
                                            <img
                                                src={
                                                    s?.attributes?.Icon?.data
                                                        ?.attributes?.url
                                                }
                                                alt=""
                                                height={32}
                                                width={20}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base !font-semibold text-white">
                                                {s?.attributes?.Name}
                                            </p>
                                            <p
                                                className="text-[#C5C5C5] text-sm font-normal pt-1"
                                                dangerouslySetInnerHTML={{
                                                    __html: `${s?.attributes?.Description}`,
                                                }}
                                            ></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div
                        className="w-[50%] py-2 px-2"
                        onMouseEnter={handleMouseEnterImage}
                        onMouseLeave={handleMouseLeaveImage}
                    >
                        <a
                            href={hoverContent.hoverLink}
                            onClick={() => {

                            }}
                        >
                            <div className="bg-white/5 px-2 py-4 rounded-xl">
                                <div className="flex items-center">
                                    <img
                                        src={hoverContent.hoverImage}
                                        alt={hoverContent.hoverTitle}
                                        width={345}
                                        height={200}

                                        className="!w-full h-[230px] mb-2"
                                    />
                                </div>
                                <div className="pl-1 pr-3">
                                    <p className="text-lg font-bold text-white">
                                        {hoverContent.hoverTitle}
                                    </p>
                                    <p className="text-sm font-medium text-white/80 leading-[21px] mt-2">
                                        {hoverContent.hoverDescription}
                                    </p>

                                    <p className="text-[#2EB1CE] flex items-center mt-2 cursor-pointer">
                                        Read More

                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustryMenuComponent;
