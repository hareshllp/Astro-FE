import React from "react";
import ContentLoader from "react-content-loader";

export interface DefaultSkeletonProps {
    times: number;
    className: any;
}

const DefaultSkeleton: any = (props: DefaultSkeletonProps) => {
    const { times = 3, className } = props;
    return (
        <>
            {Array.from(Array(times)).map((n, index) => (
                <div
                    key={`skeleton-${n}-${index}`}
                    className={className ? className : ""}
                >
                    <ContentLoader
                        width={315}
                        height={285}
                        speed={2}
                        viewBox="0 0 315 285"
                        backgroundColor="#ffffff0d"
                        foregroundColor="#ffffff1a"
                        {...props}
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            width="315"
                            height="204"
                        />
                        <rect
                            x="0"
                            y="214"
                            rx="5"
                            ry="5"
                            width="271"
                            height="18"
                        />
                        <rect
                            x="0"
                            y="242"
                            rx="5"
                            ry="5"
                            width="171"
                            height="18"
                        />
                        <rect
                            x="0"
                            y="270"
                            rx="5"
                            ry="5"
                            width="119"
                            height="16"
                        />
                    </ContentLoader>
                </div>
            ))}
        </>
    );
};

export default DefaultSkeleton;
