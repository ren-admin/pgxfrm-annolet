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
    linktag.href = "https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/eea1844b/css/pagexform-annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);

    //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Renarration</h4>"+
    "<ul id='annolet-tools-menu' >"+
        "<li class='annolet-menu-item' style='position:relative;top:-25px'>"+
            "<button id='disable-css' class='annolet-menu-sub-item' >No CSS</button>"+
        "</li>"+
        "<li class='annolet-menu-item' style='position:relative;top:-25px'>"+
            "<button id='zapper' class='annolet-menu-sub-item' >Zapper</button>"+
        "</li>"+
        "<li class='annolet-menu-item' style='position:relative;top:-25px'>"+
            "<button id='modify-content' class='annolet-menu-sub-item' >Modify Content</button>"+
        "</li>"+
        "<li class='annolet-menu-item' style='position:relative;top:-25px'>"+
            "<button id='highlighter-btn' class='annolet-menu-sub-item' >Highlighter</button>"+
        "</li>"+
        "<li class='annolet-menu-item' style='position:relative;top:-25px'>"+
            "<button id='phonetics-btn' class='annolet-menu-sub-item' >Phonetics</button>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='trans-text' class='annolet-menu-sub-item' >Translate Text</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-from-lang'>"+
                "<option value='en' >English</option>"+
                "<option value='hi' >Hindi</option>"+
                "<option value='te' >Telugu</option>"+
                "<option value='ta' >Tamil</option>"+
                "<option value='ml' >Malayalam</option>"+
                "<option value='ja' >Japanese</option>"+
                "<option value='zh' >Chinese</option>"+
            "</select>"+
            "<select class='select-tools-menu' id='select-to-lang'>"+
                "<option value='zh' >Chinese</option>"+
                "<option value='ja' >Japanese</option>"+
                "<option value='ml' >Malayalam</option>"+
                "<option value='ta' >Tamil</option>"+
                "<option value='te' >Telugu</option>"+
                "<option value='hi' >Hindi</option>"+
                "<option value='en' >English</option>"+
            "</select>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-theme' class='annolet-menu-sub-item'>Switch CSS</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-theme'>"+
                "<option value='switch1' >Theme1</option>"+
                "<option value='switch2' >Theme2</option>"+
                "<option value='switch3' >Theme3</option>"+
            "</select>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-content' class='annolet-menu-sub-item' >Page Stripper</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-content'>"+
                "<option value='show-links' >Show Links</option>"+
                "<option value='show-text' >Show Text</option>"+
                "<option value='show-images' >Show Images</option>"+
            "</select>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-font' class='annolet-menu-sub-item' >Visibility</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-font'>"+
                "<option value='increase-font' >Increase Font</option>"+
                "<option value='decrease-font' >Decrease Font</option>"+
            "</select>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-currency' class='annolet-menu-sub-item' >Convert Currency</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-from-currency'>"+
                "<option value='USD' >USD</option>"+
                "<option value='INR' >INR</option>"+
                "<option value='EUR' >EUR</option>"+
            "</select>"+
            "<select class='select-tools-menu' id='select-to-currency'>"+
                "<option value='INR' >INR</option>"+
                "<option value='USD' >USD</option>"+
                "<option value='EUR' >EUR</option>"+
            "</select>"+
        "</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-measurement' class='annolet-menu-sub-item' >Convert Measurements</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-from-measure'>"+
                "<option value='km'>kilometers</option>"+
                "<option value='mi'>Miles</option>"+
                "<option value='ft'>foot</option>"+
            "</select>"+
            "<select class='select-tools-menu' id='select-to-measure'>"+
                "<option value='mi'>Miles</option>"+
                "<option value='km'>kilometers</option>"+
                "<option value='ft'>foot</option>"+
            "</select>"+
        "</li>"+
    	"<li class='annolet-menu-item'>"+
            "<button id='change-num-sys' class='annolet-menu-sub-item' >Convert Num sys</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-num-sys'>"+
                "<option value='en-IN' >Indian</option>"+
                "<option value='en-US' >US</option>"+
    	        "<option value='en-GB'>British</option>"+
    	        "<option value='ko-KR'>Korean</option>"+
    	        "<option value='ar-EG'>Arabic</option>"+
            "</select>"+
    	"</li>"+
        "<li class='annolet-menu-item'>"+
            "<button id='change-date-format' class='annolet-menu-sub-item' >Date Format</button>"+"<br>"+
            "<select class='select-tools-menu' id='select-date-format'>"+
                "<option value='en-IN' >Indian</option>"+
                "<option value='en-US' >US</option>"+
                "<option value='en-GB'>British</option>"+
                "<option value='ko-KR'>Korean</option>"+
                "<option value='ar-EG'>Arabic</option>"+
            "</select>"+
        "</li>"+
    "</ul>";
}

// Function to disable all links on a webpage.
function disableLinks(){
    // Disable all links
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}

//Function to disable the css of a web page.
function disableCss(){
    var styleSheets = document.styleSheets;
    for ( var i=0; i<styleSheets.length; i++) {
        if(styleSheets[i].href == "https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/eea1844b/css/pagexform-annolet.css"){
           styleSheets[i].disabled = false;
        }
        else{
            styleSheets[i].disabled = true;
        }
    }
}

//Function to erase the unwanted content on a webpage.
function  Zapper(){
    alert("Remove the content by clicking anywhere on the document");
    $("body").click(function(event){
        console.log(event.target);
        targetElem= event.target;
        if(targetElem.id == "annolet-container"||targetElem.id =="zapper"||targetElem.id =="annolet-header"||targetElem.id =="annolet-menu"||targetElem.className == "annolet-menu-item"){
            targetElem.style.visibility="visible";
        }
        else{
            targetElem.style.visibility="hidden";
        }
    });

}
    
// Function to modify the content on a web page.
function modifyContent() {
    // sets attributes to all the elements in the web page.
    document.getElementsByTagName('body')[0].setAttribute('contenteditable', true);
    document.getElementsByTagName('body')[0].setAttribute('title', 'Edit Content');
}

// Function to highlight selected text on a web page.
function highlightContent() {
    var userSelection = window.getSelection();
    for(var i = 0; i < userSelection.rangeCount; i++) {
        highlightRange(userSelection.getRangeAt(i));
    }
}

function highlightRange(range) {
    var newNode = document.createElement("span");
    newNode.setAttribute(
       "style",
       "background-color: yellow; display: inline;"
    );
    range.surroundContents(newNode);
}

// Function to translate the selected text to phonetics.
function phoneticsTrans(){
    var url = "//localhost:5000/phonetic-trans"
    var xhr = new XMLHttpRequest();
    if (window.getSelection) 
    {
        var selected_text= window.getSelection().toString();
    } 
    else if (document.selection && document.selection.type != "Control") {
        var selected_text = document.selection.createRange().text;
    }
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({"sentence":selected_text}));
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            var parent = $(window.getSelection().focusNode.parentElement);
            var oldHtml = parent.html();
            var newHtml = oldHtml.replace(selected_text, "<span class='highlight' style='color:green'>"+res+"</span>");
            parent.html( newHtml );
        }
    }
}

// Function to translate the selected text to an other language.
function translateText(){
    if (window.getSelection) 
    {
        var selected_text= window.getSelection().toString();
    } 
    else if (document.selection && document.selection.type != "Control") {
        var selected_text = document.selection.createRange().text;
    }
    var from = document.getElementById("select-from-lang").value;
    var to = document.getElementById("select-to-lang").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "//localhost:5000/language-translive", true); 
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({"sentence":selected_text,"from-language":from,"to-language":to}));
    xhr.onreadystatechange = processRequest;
    function processRequest(e)
    {
        if (xhr.readyState == 4)
        {
            var language_trans = xhr.responseText;
            var parent = $(window.getSelection().focusNode.parentElement);
            var oldHtml = parent.html();
            var newHtml = oldHtml.replace(selected_text, "<span class='highlight' style='color:green'>"+language_trans+"</span>");
            parent.html( newHtml );
        }
    }
}

// Creates alternate stylesheets to switch the themes on a web page.
function alternateStylesheets(){
    //appending a CSS alternate stylesheets to head element of a webpage.
    var i= 0;
    var style_sheets = 3; 
    var css_themes =["https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/eea1844b/css/switch1.css", 
    "https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/eea1844b/css/switch2.css", 
    "https://cdn.rawgit.com/ren-admin/pagexform-bookmarklet/eea1844b/css/switch3.css"];
    var link_title =['switch1', 'switch2', 'switch3'];

    for(i=0; i<style_sheets; i++){
        var linktag = document.createElement('link');
        linktag.rel  = 'alternate stylesheet';
        linktag.type = 'text/css';
        linktag.href = css_themes[i];
        linktag.title= link_title[i];
        head  = document.getElementsByTagName('head')[0];
        head.appendChild(linktag);
    }
    var selected_theme = document.getElementById("select-theme").value;
    switchStyle(selected_theme)
}

function switchStyle(css_title)
{   
   var i;
   var linktag = document.getElementsByTagName("link");
   for (i = 0; i < linktag.length; i++ ) {
        if ((linktag[i].rel.indexOf( "stylesheet" ) != -1) &&linktag[i].title) {
            linktag[i].disabled = true ;
            if (linktag[i].title == css_title) {
                linktag[i].disabled = false ;
            }
        }
   }
}

// Function to display the selected content on the web page and rest of the content is made hidden.  
function showContent(){
    var all = document.getElementsByTagName("*");
    var selected_content = document.getElementById("select-content").value;
    if(selected_content == 'show-links'){
        for (var i=0, max=all.length; i < max; i++) {
            var href_attribute = all[i].hasAttribute("href");
            var src_attribute = all[i].hasAttribute("src");
            if(href_attribute == true || src_attribute == true){
                all[i].style.visibility = 'visible';
            }
            else if(href_attribute == false && src_attribute == false){
                all[i].style.visibility = 'hidden';
            }
        }
    }
    else if(selected_content == 'show-text') {
        for (var i=0, max=all.length; i < max; i++) {
            if(all[i].innerHTML){
                all[i].style.visibility = 'visible';
            }
            else{
                all[i].style.visibility = 'hidden';
            }
        }
    }
    else if(selected_content == 'show-images') {
        for (var i=0, max=all.length; i < max; i++) {
            var src_attribute = all[i].hasAttribute("src");
            if(src_attribute == false){
                all[i].style.visibility = 'hidden';
            }
            else if(src_attribute == true){
                all[i].style.visibility = 'visible';
            }
        }
    }

    //get the menu bar id 
    document.getElementById('annolet-container').style.visibility='visible';
    var annolet_elems = document.getElementById('annolet-container').children;
    //This will make all children elements of div visible. 
    for(var i = 0; i < annolet_elems.length; i++){
        annolet_elems[i].style.visibility = 'visible';
    }
}

// Function to increase/decrease the font size of the content.
function changeFont(){
    var fontSize = parseInt($('body').css('font-size'),10);
    var selected_font = document.getElementById("select-font").value;
    if(selected_font == 'increase-font'){
        fontSize +=1.5;
        $('body').css('font-size', fontSize+'px');
    }
    else if(selected_font == 'decrease-font'){
        fontSize -=1;
        $('body').css('font-size', fontSize+'px');
    }
}

//Function to convert the currency 
function convertCurrency(){
    if (window.getSelection) 
    {
        var selected_text = window.getSelection().toString();
        var remove_splchar =  selected_text.replace(/\,/g,"");
        var cur_amount =  parseFloat(remove_splchar);
    } 
    else if (document.selection && document.selection.type != "Control") {
        var selected_text = document.selection.createRange().text;
        var remove_splchar =  selected_text.replace(/\,/g,"");
        var cur_amount =  parseFloat(remove_splchar);
    }
    var from_cur = document.getElementById('select-from-currency').value;
    var to_cur = document.getElementById('select-to-currency').value;

    var url = "//localhost:5000/currency-conversion"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({ "cur_amount":cur_amount, "from_cur":from_cur, "to_cur":to_cur }));
    xhr.onreadystatechange = processRequest;
    function processRequest(e)
    {
        if (xhr.readyState == 4)
        {
            var cur_res = xhr.responseText;
            var parent = $(window.getSelection().focusNode.parentElement);
            var oldHtml = parent.html();
            var newHtml = oldHtml.replace(selected_text, "<span class='highlight' style='color:green'>"+cur_res+"</span>");
            parent.html( newHtml );
        }
    }
}

//Function to convert units of measurements
function changeMeasurement() {
   if (window.getSelection) 
    {
        var selected_text = window.getSelection().toString();
        var remove_splchar =  selected_text.replace(/\,/g,"");
        var measurement_num =  parseFloat(remove_splchar);
    } 
    else if (document.selection && document.selection.type != "Control") {
        var selected_text = document.selection.createRange().text;
        var remove_splchar =  selected_text.replace(/\,/g,"");
        var measurement_num =  parseFloat(remove_splchar);
    }
    var from_measure = document.getElementById('select-from-measure').value;
    var to_measure = document.getElementById('select-to-measure').value;

    var url = "//localhost:5000/measurement-conversion"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({ "measurement_num":measurement_num, "from_measure":from_measure, "to_measure":to_measure }));
    xhr.onreadystatechange = processRequest;
    function processRequest(e)
    {
        if (xhr.readyState == 4)
        {
            var measurement_res = xhr.responseText;
            var parent = $(window.getSelection().focusNode.parentElement);
            var oldHtml = parent.html();
            var newHtml = oldHtml.replace(selected_text, "<span class='highlight' style='color:green'>"+measurement_res+"</span>");
            parent.html( newHtml );
        }
    }
}

//Function to convert the number in preferred number system.
function convertNumsys(){
    var selected_numsys = document.getElementById("select-num-sys").value;
    if (window.getSelection) 
    {
        var number = window.getSelection().toString();
        var remove_splchar =  number.replace(/\,/g,"");
        var selected_num = parseInt(remove_splchar);
    } 
    else if (document.selection && document.selection.type != "Control") {
        var number = document.selection.createRange().text;
        var remove_splchar =  number.replace(/\,/g,"");
        var selected_num = parseInt(remove_splchar);
    }
    var converted_num = selected_num.toLocaleString(selected_numsys);
    var parent = $(window.getSelection().focusNode.parentElement);
    var oldHtml = parent.html();
    var newHtml = oldHtml.replace(number, "<span class='highlight' style='color:green'>"+converted_num+"</span>");
    parent.html( newHtml );
}

//Function to format the date as per the preferred country.
function formatDate(){
    var selected_format = document.getElementById("select-date-format").value;
    if (window.getSelection) 
    {
        var selected_text = window.getSelection().toString();
        var selected_date = new Date(selected_text);
    } 
    else if (document.selection && document.selection.type != "Control") {
        var selected_text = document.selection.createRange().text;
        var selected_date = new Date(selected_text);
    }
    var formated_date = selected_date.toLocaleDateString(selected_format);
    var parent = $(window.getSelection().focusNode.parentElement);
    var oldHtml = parent.html();
    var newHtml = oldHtml.replace(selected_text, "<span class='highlight' style='color:green'>"+formated_date+"</span>");
    parent.html( newHtml );

}

// Function to add click events to the annolet elements.
function addClickevents(){
    document.getElementById('disable-css').addEventListener('click', function() {
        disableCss()
    }, false);
    document.getElementById('zapper').addEventListener('click', function() {
        Zapper()
    }, false);
    document.getElementById('modify-content').addEventListener('click', function() {
        modifyContent()
    }, false);
    document.getElementById('highlighter-btn').addEventListener('click', function() {
        highlightContent()
    }, false);
    document.getElementById('phonetics-btn').addEventListener('click', function(event) {
        phoneticsTrans()
    }, false);
    document.getElementById('trans-text').addEventListener('click', function() {
        translateText()
    }, false);
    document.getElementById('change-theme').addEventListener('click', function() {
        alternateStylesheets()
    }, false);
    document.getElementById('change-content').addEventListener('click', function() {
        showContent()
    }, false);
    document.getElementById('change-font').addEventListener('click', function() {
        changeFont()
    }, false);
    document.getElementById('change-currency').addEventListener('click', function() {
        convertCurrency()
    }, false);
    document.getElementById('change-num-sys').addEventListener('click', function() {
        convertNumsys()
    }, false);
    document.getElementById('change-date-format').addEventListener('click', function() {
        formatDate()
    }, false);
    document.getElementById('change-measurement').addEventListener('click', function() {
        changeMeasurement()
    }, false);
}

window.onload = function() {
    annoletContainer()
    disableLinks()
    addClickevents()
};
    