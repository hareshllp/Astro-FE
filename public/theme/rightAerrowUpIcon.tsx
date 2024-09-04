import React from "react";

export const RightArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={15}
            viewBox="0 0 26 15"
            fill="none"
            {...props}
        >
            <path
                d="M16.125 1.90625C16.1823 1.27604 16.526 0.932292 17.1562 0.875H24.7188C25.349 0.932292 25.6927 1.27604 25.75 1.90625V9.46875C25.6927 10.099 25.349 10.4427 24.7188 10.5C24.0885 10.4427 23.7448 10.099 23.6875 9.46875V4.39844L15.4375 12.5625C14.9792 12.9922 14.5065 12.9922 14.0195 12.5625L9.25 7.83594L2.76172 14.2812C2.27474 14.7109 1.78776 14.7109 1.30078 14.2812C0.89974 13.8229 0.89974 13.3503 1.30078 12.8633L8.51953 5.64453C9.00651 5.24349 9.47917 5.24349 9.9375 5.64453L14.75 10.4141L22.2266 2.9375H17.1562C16.526 2.88021 16.1823 2.53646 16.125 1.90625Z"
                fill="url(#paint0_linear_629_17019)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_629_17019"
                    x1={4.08296}
                    y1={11.0556}
                    x2={14.7452}
                    y2={11.1465}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#16FCD2" />
                    <stop offset={1} stopColor="#65B5FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};
