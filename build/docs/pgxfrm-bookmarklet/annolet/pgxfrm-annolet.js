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
    linktag.href = "https://cdn.rawgit.com/ren-admin/pgxfrm-annolet/semantic-overlay/src/pgxfrm-bookmarklet/annolet/css/pgxfrm-annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);
    // injecting html code
    loadHtml();
}

function loadHtml()
{
    var html_url = "https://cdn.rawgit.com/sadhanareddy/markup-schema/a66fb7dc/test.txt"; 
    $.get(html_url, function(data, status) {
    	html_content = data;
    	console.log("Data: " + html_content + "\nStatus: " + status);
        console.log(html_content);
	document.getElementById("annolet-container").innerHTML = html_content;
    });
}

function getJsondata()
{
    var url = "https://cdn.rawgit.com/sadhanareddy/markup-schema/8319b87c/markup_tags.json"; 
    $.get(url, function(data, status) {
    	json_data = data;
    	console.log("Data: " + json_data + "\nStatus: " + status);
        console.log(json_data);
    });
}

function addclickEvents() {
    document.getElementById('qa-category').addEventListener('click', function() {
        var category = json_data["categories"][0]["name"];
	annotateTag(category);
    }, false);
    document.getElementById('product-category').addEventListener('click', function() {
        var category = json_data["categories"][1]["name"];
	annotateTag(category);
    }, false);
    document.getElementById('number-category').addEventListener('click', function() {
        var category = json_data["categories"][2]["name"];
	annotateTag(category);
    }, false);
}

function annotateTag(markup_category) {
    var selected_tag = document.getElementById(markup_category).value;
    var custom_tag = document.createElement(json_data['categories']['tags'][selected_tag]);
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

window.onload = function() {
    annoletContainer()
    getJsondata()
    addclickEvents()
};
