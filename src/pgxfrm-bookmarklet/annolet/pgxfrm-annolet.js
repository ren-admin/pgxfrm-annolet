
function annoletContainer(){
    //appending a div(annolet container) to body element of a webpage.
    var body = document.getElementsByTagName('body')[0];
    container = document.createElement('div');
    container.id = 'annolet-container';
    body.appendChild(container);

    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the annolet container.
    var scripttag = document.createElement('script');
    scripttag.type = "text/javascript";
    scripttag.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"; 
    document.getElementsByTagName('head')[0].appendChild(scripttag);

    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the annolet container.
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    linktag.href = "https://rawgit.com/ren-admin/pgxfrm-annolet/semantic-overlay/src/pgxfrm-bookmarklet/annolet/css/pgxfrm-annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);

    // injecting html code
     document.getElementById('annolet-container').innerHTML = "<h3 id='annolet-header'>Semantic Overlay</h3>"+
    "<ul id='annolet-tools-menu' >"+
        "<li class='annolet-menu-item'>"+
        "<br>"+
        "</li>"+
    "</ul>";
}

function getJsondata()
{
    var url = "https://rawgit.com/ren-admin/pgxfrm-annolet/semantic-overlay/src/pgxfrm-bookmarklet/annolet/custom_tags.json"; 
    $.get(url, function(data, status) {
    	json_data = data;
    	createMenulist(json_data);
    });
}

function createMenulist(result){
	for (var i = 0; i < result.main_menu.length; i++) { 
        var menu =  "<div style='position:relative;top:19px;display:inline-block;'>"+
                "<button id='category-"+i+"' class='annolet-menu-sub-item'>Tag it..!</button>"+"<br>"+
                "<select class='select-tools-menu-"+i+"' id='"+json_data.main_menu[i].name+"'>"+
                "</select>"+
                "</div>";
        $('.annolet-menu-item').append(menu);
        tags = result.main_menu[i].sub_menu;
        for( property in tags){
            $('.select-tools-menu-'+i).append('<option value="'+tags[property]+'">'+tags[property]+'</option>')
        }
    }
    addclickEvents()
}

function annotateTag(markup_category){
    var selected_tag = document.getElementById(markup_category).value;
    var custom_tag = document.createElement(selected_tag);
    createCustomTag() 
    function createCustomTag() {
        if(window.getSelection){
            var userSelection = window.getSelection()
            var userSelection_text = userSelection.toString();
            custom_tag.textContent = userSelection_text;
        }
        else if (document.selection && document.selection.type != "Control") {
            var userSelection = document.selection.createRange().text;
            custom_tag.textContent = userSelection;
        }      
        custom_tag.style.backgroundColor = "yellow";
        var range = userSelection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(custom_tag);
    }
}

function addclickEvents() {
    document.getElementById('category-0').addEventListener('click', function() {
        var category = json_data.main_menu[0].name;
        annotateTag(category);
    }, false);
    document.getElementById('category-1').addEventListener('click', function() {
        var category = json_data.main_menu[1].name;
        annotateTag(category);
    }, false);
    document.getElementById('category-2').addEventListener('click', function() {
        var category = json_data.main_menu[2].name;
        annotateTag(category);
    }, false);
}      

window.onload = function() {
    annoletContainer()
    getJsondata()
};
