/*
*mold.js  获取页面的代码放置到代码显示区域
 */
var htmlCode =document.getElementById('activeArea'),
    codeArea =document.getElementById('codeArea');
    cssCode =document.getElementById('cssCode'),
    jsCode =document.getElementById('jsCode'),
    htmlArea =document.getElementById('htmlArea'),
    cssArea =document.getElementById('cssArea'),
    jsArea =document.getElementById('jsArea'),
    codeHideBtn =document.getElementById('codeHideBtn'),
    open = true;


  htmlArea.innerHTML = htmlCode.innerHTML;
  cssArea.innerHTML = cssCode.innerHTML;
  jsArea.innerHTML = jsCode.innerHTML;


/*显示/隐藏代码区域*/
codeHideBtn.onclick = function () {
    if(open){
       htmlCode.style.cssText = 'width:100%';
       codeArea.style.cssText = 'display:none';
       this.style.cssText = "left: 98%; background: rgb(204, 204, 204); width: 40px; color: rgb(255, 255, 255); font-size: 24px;line-height:37;";
       open = false;
    }else{
        htmlCode.style.cssText = '';
        codeArea.style.cssText = '';
        this.style.cssText = " ";
        open = true;
    }
}
