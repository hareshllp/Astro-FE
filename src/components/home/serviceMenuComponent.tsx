
import { serviceMenu } from "@utils/constants";
import React, { useEffect, useState } from "react";

interface serviceMenuProps {
    data?: any;
    setServiceOpen?: any;
    blogs: any
}

const ServiceMenuComponent = (props: serviceMenuProps) => {
    let serviceOpen = false;
    const blogs = props;
    const [showCaseStudy, setShowCaseStudy] = useState(true);



    useEffect(() => {
        const interval = setInterval(() => {
            setShowCaseStudy((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hidden lg:flex gap-4 bg-[#0E1330] border border-[#282D45] headerMenu w-[921px] text-white rounded-md">
                <div className="w-1/2 py-4 lg:h-[450px] overflow-y-scroll overflow-x-hidden modern-scrollbar">
                    {serviceMenu.map((s: any, index: number) => {
                        return (
                            <a
                                key={index}
                                href={`${s?.url}`}
                                onClick={() => {
                                    serviceOpen = true;
                                }}
                            >
                                <div className="px-[25px]">
                                    <div className="flex gap-4 border-b border-white/10 p-5 btn-three">
                                        <div className="mt-1">{s?.icon}</div>
                                        <div>
                                            <p className="text-base !font-semibold text-white">
                                                {s?.title}
                                            </p>
                                            <p className="text-[#C5C5C5] text-sm font-normal pt-1">
                                                {s?.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div className="w-1/2 py-[37px] px-[25px]">
                    <div className="bg-white/5 px-3 py-8 rounded-xl">
                        {showCaseStudy ? (
                            <div>
                                <div className="flex items-center">
                                    <img
                                        src={"/navigation/kukuFM.svg"}
                                        alt="Kukufm"
                                        width={345}
                                        height={200}
                                        className="!w-full mb-2"
                                    />
                                </div>
                                <div className="px-3">
                                    <p className="text-lg font-bold text-white">
                                        Kukufm
                                    </p>
                                    <p className="text-sm font-medium text-white/80 leading-[21px] mt-2">
                                        Explore seamless data transition,
                                        optimizing Hafniabw usage across
                                        devices.
                                    </p>
                                    <a
                                        href={`/case-study/kukufm`}
                                        onClick={() => {
                                            serviceOpen = true;
                                        }}
                                    >
                                        <p className="text-[#2EB1CE] flex items-center mt-2 cursor-pointer">
                                            Read More

                                        </p>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            blogs?.data?.length > 0 && (
                                <>
                                    <div className="flex items-center">
                                        <img
                                            src={`${import.meta.env.AWS_S3_URL}${blogs.data[0]?.attributes.Listing_Image?.data?.attributes?.hash}${blogs.data[0]?.attributes.Listing_Image?.data?.attributes?.ext}`}
                                            alt={
                                                blogs.data[0]?.attributes.Title
                                            }
                                            width={345}
                                            height={200}

                                            className="!w-[345px] !h-[200px] mb-2 rounded-xl mx-auto"
                                        />
                                    </div>
                                    <div className="px-3 pt-6">
                                        <p className="text-lg font-bold text-white">
                                            {blogs.data[0]?.attributes?.Title}
                                        </p>
                                        <p
                                            className="text-sm font-medium text-white/80 leading-[21px] mt-2"
                                            dangerouslySetInnerHTML={{
                                                __html: blogs.data[0]?.attributes?.Description.split(
                                                    " ",
                                                )
                                                    .slice(0, 8)
                                                    .join(" "),
                                            }}
                                        />
                                        <a
                                            onClick={() => {
                                                serviceOpen = true;
                                            }}
                                            href={`/blog/${blogs.data[0]?.attributes?.Slug}`}
                                        >
                                            <p className="text-[#2EB1CE] flex items-center mt-2 cursor-pointer">
                                                Read More

                                            </p>
                                        </a>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceMenuComponent;
