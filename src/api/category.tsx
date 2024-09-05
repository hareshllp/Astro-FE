export const fetchCategoryAPI = async ({ headers }: any): Promise<any> => {
    return fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            "Content-Type": "application/json",
            // "Cache-Control": "max-age=86400",
        },
        cache: "no-store",
    });
};

export const fetchCaseStudyCategoryAPI = async ({
    headers,
}: any): Promise<any> => {
    return fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/case-study-categories`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        },
    );
};
