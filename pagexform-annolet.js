// Function to create a annolet container 
function annoletContainer(){
    //appending a div(annolet container) to body element of a webpage.
    var body = document.getElementsByTagName('body')[0];
    container = document.createElement('div');
    container.id = 'annolet-container';
    body.appendChild(container);

    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the annolet container.
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    linktag.href = "https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/5789c576/css/pagexform-annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);

    //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Semantic Overlay</h4>"+
    "<ul id='annolet-tools-menu' >"+
        "<li class='annolet-menu-item'>"+
            "<div style='position:relative;top:19px;display:inline-block;'>"+
                "<button id='qa-category' class='annolet-menu-sub-item' >Tag Q/A..!</button>"+"<br>"+
                "<select class='select-tools-menu' id='select-qa-category'>"+
                    "<option value='question'>question</option>"+
                    "<option value='multiple-choice'>multiple choice</option>"+
                    "<option value='correct-answer'>correct answer</option>"+
                    "<option value='explanation'>explanation</option>"+
                    "<option value='useful-links'>useful-links</option>"+
                "</select>"+
            "</div>"+
            "<div style='position:relative;top:19px;display:inline-block;'>"+
                "<button id='product-category' class='annolet-menu-sub-item' >Tag Product..!</button>"+"<br>"+
                "<select class='select-tools-menu' id='select-product-category'>"+
                    "<option value='product-name'>product name</option>"+
                    "<option value='model'>model</option>"+
                    "<option value='price'>price</option>"+
                    "<option value='seller'>seller</option>"+
                    "<option value='brand'>brand</option>"+
                "</select>"+
            "</div>"+
            "<div style='position:relative;top:19px;display:inline-block;'>"+
                "<button id='number-category' class='annolet-menu-sub-item' >Tag Number..!</button>"+"<br>"+
                "<select class='select-tools-menu' id='select-number-category'>"+
                    "<option value='date'>date</option>"+
                    "<option value='time'>time</option>"+
                    "<option value='currency'>currency</option>"+
                    "<option value='distance'>distance</option>"+
                    "<option value='weight'>weight</option>"+
                "</select>"+
            "</div>"+"<br>"+
            "<button id='submit-btn' class='annolet-menu-sub-item' style='position:relative;top:19px;'>Submit</button>"+
        "</li>"+
    "</ul>";
}

//Function which annotates tags around the selected content on a webpage.
function annotateTag(clickedCategory){
    if(clickedCategory == 'qa'){
        var selected_tag = document.getElementById('select-qa-category').value;
        createCustomtag()
    }
    else if(clickedCategory == 'product'){
        var selected_tag = document.getElementById('select-product-category').value;
        createCustomtag()
    }
    else if(clickedCategory == 'number'){
        var selected_tag = document.getElementById('select-number-category').value;
        createCustomtag()
    }
    function createCustomtag(){
        var custom_tag = document.createElement(selected_tag);
        if(window.getSelection){
            var userSelection = window.getSelection()
            var userSelection_text = userSelection.toString();
            custom_tag.textContent = userSelection_text;
        }
        else if (document.selection && document.selection.type != "Control") {
            var userSelection = document.selection.createRange().text;
            custom_tag.textContent = userSelection;
        }      
        custom_tag.style.color = "green";
        var range = userSelection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(custom_tag);
    }
}

// Function to add click events to the annolet elements.
function addClickevents(){
    document.getElementById('qa-category').addEventListener('click', function() {
        var category = 'qa';
        annotateTag(category)
    }, false);
    document.getElementById('product-category').addEventListener('click', function() {
        var category = 'product';
        annotateTag(category)
    }, false);
    document.getElementById('number-category').addEventListener('click', function() {
        var category = 'number';
        annotateTag(category)
    }, false);
    document.getElementById('submit-btn').addEventListener('click', function() {
        var html_source = document.getElementsByTagName('html')[0].innerHTML;
        alert($('html').html());
        //window.open(html_source); 
    }, false);
}

window.onload = function() {
    annoletContainer()
    addClickevents()
};
    