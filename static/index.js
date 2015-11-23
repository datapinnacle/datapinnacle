;(function() {
    "use strict";
    function getEl(str) {
        switch (str[0]) {
            case '#':
                return document.getElementById(str.slice(1, str.length));
            case '.':
                return document.getElementsByClassName(str.slice(1, str.length));
            default:
                return null;
        }
    }
    window.onload = function() {
        getEl('#nav-index').onclick =
        getEl('#nav-index2').onclick = function() {
            window.location.href = './index.html';
        };
        getEl('#nav-introduction').onclick =
        getEl('#nav-introduction2').onclick = function() {
            window.location.href = './about.html';
        };
        getEl('#nav-recruitment').onclick =
        getEl('#nav-recruitment2').onclick = function() {
            window.location.href = './recruitment.html';
        };
        getEl('#nav-contactus').onclick =
        getEl('#nav-contactus2').onclick = function() {
            var body = "商务合作请写明您的联系方式以及简要的合作内容。投递简历请附电子版简历。";
            window.location.href = 'mailto:ke.wu@datapinnacle.cn?subject=商务合作或投递简历&cc=shuai.wang@datapinnacle.cn&body=' + body;
        };
    }
})();
