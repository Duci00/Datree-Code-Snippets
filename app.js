
new ClipboardJS('.CopyButton', {
    target: function(trigger) {
        return trigger.nextElementSibling.nextElementSibling.firstChild;
    }
});

window.addEventListener('click', (e)=>{
    if(e.target.classList.contains("CopyButton")){
        e.target.nextElementSibling.classList.add("codeCopied-active");
        if (window.getSelection) {window.getSelection().removeAllRanges();}
        else if (document.selection) {document.selection.empty();}
        setTimeout(()=>{
            e.target.nextElementSibling.classList.remove("codeCopied-active");
        },4000)
    }
});