export const fetchSponsoredBlogsAPI = async ({
    headers,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate[0]=Author&populate[1]=Author.Profile_Image&populate[2]=Author.Social_Media_Links&populate[3]=Listing_Image&populate[4]=Category&filters[Is_Sponsored]=true`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
                // "Cache-Control": "max-age=86400",
            },
            cache: "no-store",
        },
    );
};

export const fetchBlogsAPI = async ({
    headers,
    pageSize,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*&pagination[page]=1&pagination[pageSize]=${pageSize}&sort[0]=publishedAt:desc`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        },
    );
};

export const fetchBlogByCategoryByIdAPI = async ({
    headers,
    id,
    pageSize,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*&filters[$and][0][Category][id][$eq]=${id}&pagination[page]=1&pagination[pageSize]=${pageSize}&sort[0]=publishedAt:desc`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        },
    );
};

export const fetchBlogBySlugAPI = async ({
    headers,
    slug,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate[0]=Author&populate[1]=Author.Profile_Image&populate[2]=Author.Social_Media_Links&populate[3]=Banner_Image&populate[4]=Category&populate[5]=Table_Of_Content&populate[6]=Listing_Image&populate[7]=Tags&populate[8]=Meta_Data&populate[9]=FAQs&filters[Slug][$eq]=${slug}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
                // "Cache-Control": "max-age=86400",
            },
            cache: "no-store",
        },
    );
};

export const fetchRelatedBlogsAPI = async ({
    headers,
    id,
    slug,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate[0]=Author&populate[1]=Author.Profile_Image&populate[2]=Listing_Image&populate&filters[$and][0][Category][id][$eq]=${id}&filters[$and][0][Slug][$ne]=${slug}&sort[1]=createdAt:desc&pagination[pageSize]=3`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
                // "Cache-Control": "max-age=86400",
            },
            cache: "no-store",
        },
    );
};

export const fetchSearchBlogsAPI = async ({
    headers,
    pageSize,
    id,
    value,
}: any): Promise<any> => {
    let getUrl: string;
    if (id === 0) {
        getUrl = `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*&filters[$and][0][Title][$containsi]=${value}&pagination[page]=1&pagination[pageSize]=${pageSize}&sort[1]=createdAt:desc`;
    } else {
        getUrl = `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*&filters[$and][0][Category][id][$eq]=${id}&filters[$and][1][Title][$containsi]=${value}&pagination[page]=1&pagination[pageSize]=${pageSize}&sort[1]=createdAt:desc`;
    }

    return fetch(getUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
};

export const fetchSearchRelatedBlogsAPI = async ({
    headers,
}: any): Promise<any> => {
    return fetch(
        `${import.meta.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*&sort[1]=createdAt:desc&pagination[page]=1&pagination[pageSize]=3`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        },
    );
};
