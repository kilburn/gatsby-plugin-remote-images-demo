/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const urls = [
    'https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/fullscreen.png',
    'https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/webgl-logo.png',
    'https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressLogo.Dark.png',
    'https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressEmpty.Dark.png',
    'https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressFull.Dark.png',
    "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/banner/IELTSlogo.png", 
    "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/banner/IELTSpartners.jpg", 
    "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/main/userCheck.png"
]

function *grouper (input, count) {
    for(let i=0; i+count<=input.length; i += count) {
        yield input.slice(i, i+count)
    }
}

// You can delete this file if you're not using it
const sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    const groups = Array.from(grouper(urls, 2))
    const promises = groups.map(([url1, url2]) => createNode({
        id: createNodeId(`customNode-${url1}-${url2}`),
        url1,
        url2,
        internal: {
            type: 'CustomNode',
            contentDigest: createContentDigest({url1, url2}),
        }
    }))
    await Promise.all(promises)
}

module.exports = {
    sourceNodes
}