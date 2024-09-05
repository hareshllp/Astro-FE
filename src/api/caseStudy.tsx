export const fetchCaseStudyAPI = async ({
    headers,
    pageSize,
}: any): Promise<any> => {
    return fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/case-studies?populate=*&pagination[page]=1&pagination`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json", // Content type may vary depending on your API
            },
            cache: "no-store",
        },
    );
};

export const fetchCaseStudyByCategoryByIdAPI = async ({
    headers,
    id,
}: any): Promise<any> => {
    return fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/case-studies?populate[0]=Banner_Image&populate[1]=Listing_image&populate[2]=Client_section&populate[3]=Client_section.Tools_and_Technology&populate[4]=case_study_category&filters[$and][0][case_study_category][id][$eq]=${id}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
                // "Cache-Control": "max-age=86400",
            },
            cache: "no-store",
        },
    );
};
