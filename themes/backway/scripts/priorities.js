/**
* Thumbnail Helper
* @description Get the thumbnail url from a post
* @example
*     <%- thumbnail(post) %>
*/
hexo.extend.helper.register('h1Escape', function (page) {
    return page.longtitle || page.title || '';
});