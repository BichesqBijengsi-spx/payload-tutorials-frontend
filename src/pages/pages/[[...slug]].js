import { RenderBlocks } from '@/utils/RenderBlocks'
import React from 'react'

export default function Page({page}) {
    return (
        <div>
            <RenderBlocks layout={page.layout} />
        </div>
    )
}

export async function getStaticPaths() { 
    const pageReq = await axios(`api/pages?limit=100`)
    const pageData = pageReq.data;

    const paths = pageData.docs.map(({ slug, id }) => ({
        params: {
            slug: slug !== 'index' ? slug.split('/') : false,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const pageReq = await axios(`api/pages?limit=100`)
    const pageData = pageReq.data;
    
    const returnObj = {
        paths: pageData.docs.map(({ slug, id }) => ({
            params: {
                slug: slug !== 'index' ? slug.split('/') : false,
            },
        })),
        fallback: false,
    };

    return returnObj;
}


// export async function getStaticProps (ctx) { 
//     const slug = ctx.params?.slug || 'index';
//     const preview = ctx.preview || false;

//     // fetch page
//     const pageReq = await axios(`api/pages?where[slug][equals]=${slug}`);
//     const pageData = pageReq.data.docs[0];

//     return {
//         props: {
//             page: pageData,
//         },
//     }
// }