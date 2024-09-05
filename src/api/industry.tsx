export const fetchIndustryAPI = async ({ headers }: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/industries?populate[Icon]=*`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            }
        },
    );
};

export const fetchIndustryDetailsAPI = async ({
    headers,
    slug,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/industry-details?populate[Capabilities_Component][populate][0]=Image&populate[Why_choose_us][populate][1]=Icon&populate[Hero_Section][populate][2]=Image&populate[Expertise_Component][populate]&populate[CTA_Section][populate][3]=Image&populate[Tech_Section][populate][4]=Icon&populate[FAQ_Component][populate]&populate[Meta_Data][populate]&populate[Expertise_Description][populate]&populate[Testimonial][populate]=Image&populate[Testimonial][populate]=Logo&populate[og_image]=Image&populate=*&filters[Slug][$eq]=${slug}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
                "Cache-Control": "max-age=86400",
            }
        },
    );
};
