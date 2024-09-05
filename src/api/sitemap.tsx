export const fetchSitemapAPI = async ({
    headers,
    pageSize,
}: any): Promise<any> => {
    return fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sitemaps?populate=*&pagination[page]=1&pagination[pageSize]=${pageSize}`,
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
