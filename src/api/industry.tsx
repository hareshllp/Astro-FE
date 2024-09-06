export const fetchIndustryAPI = async (): Promise<any> => {
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


