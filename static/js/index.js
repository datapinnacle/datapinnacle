;(function() {
    "use strict";
    // 跳转使用
    function bindClick(node, url) {
        console.log(node);
        node.onclick = function() {
            window.location.href = url;
        }
    }
    // 事先分组拾取元素
    function getElByGroup(str) {
        var elList = [];
        elList.push(document.querySelectorAll(str));
        return elList;
    }

    // 页面加载绑定之后需要做的事情
    window.onload = function() {
        var els = [
            '.nav-index',
            '.nav-introduction',
            '.nav-recruitment',
            '.nav-contactus',
            '.email'
        ];
        var urls = [
            'index.html',
            'about.html',
            'recruitment.html',
            'mailto:ke.wu@datapinnacle.cn?subject=商务合作或投递简历&cc=shuai.wang@datapinnacle.cn&body=商务合作请写明您的联系方式以及简要的合作内容。投递简历请附电子版简历。',
            'mailto:ke.wu@datapinnacle.cn?subject=投递简历&cc=shuai.wang@datapinnacle.cn&body=投递简历请附电子版简历。'
        ];
        for (var index = 0, len = els.length; index < len; index++) {
            var nodes = document.querySelectorAll(els[index]);
            for (var i = 0, l = nodes.length; i < l; i++) {
                bindClick(nodes[i], urls[index]);
            }
        }
    }
    // window.onload = function() {

    //     document.querySelector('#nav-index').onclick =
    //     /*document.querySelector('#nav-index2').onclick = */function() {
    //         window.location.href = './index.html';
    //     };
    //     document.querySelector('#nav-introduction').onclick =
    //     /* document.querySelector('#nav-introduction2').onclick = */function() {
    //         window.location.href = './about.html';
    //     };
    //     document.querySelector('#nav-recruitment').onclick =
    //     /* document.querySelector('#nav-recruitment2').onclick = */function() {
    //         window.location.href = './recruitment.html';
    //     };
    //     document.querySelector('#nav-contactus').onclick =
    //     /*document.querySelector('#nav-contactus2').onclick = */function() {
    //         var body = "商务合作请写明您的联系方式以及简要的合作内容。投递简历请附电子版简历。";
    //         window.location.href = 'mailto:ke.wu@datapinnacle.cn?subject=商务合作或投递简历&cc=shuai.wang@datapinnacle.cn&body=' + body;
    //     };
        
    //     if (document.querySelector('#email')) {
    //         document.querySelector('#email').onclik = function() {
    //             var body ="投递简历请附电子版简历。";
    //             window.location.href = 'mailto:ke.wu@datapinnacle.cn?subject=简历投递&cc=shuai.wang@datapinnacle.cn&body=' + body;
    //         };
    //     }
    // }
})();
