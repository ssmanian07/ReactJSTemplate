class JSONFormUtilities{

    //Credit : http://stackoverflow.com/questions/5002111/javascript-how-to-strip-html-tags-from-string
    static stripTextFromHTML(htmlString)
    {
        //var html = "<p>Some HTML</p>";
        let div = document.createElement("div");
        div.innerHTML = htmlString;
        let stripedText = div.textContent || div.innerText || "";

        return stripedText;
    }

};

export default JSONFormUtilities;
