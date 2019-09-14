var url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function loadDailyPicture(){
$.ajax({
    url: url,
    success: function(result){
        if(result.media_type == "video") {
            $("#apodImage").css("display", "none");
            $("#apod_vid_id source").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apodImage").attr("src", result.url);
        }
        $("#apodExplanation").text(result.explanation);
        $("#apodTitle").text(result.title);
    }
});
    openModal();
}

function searchPicture(){
    var search = document.getElementById("search");
    var searchUrl = "https://images-api.nasa.gov/search?q="+search.value+"&media_type=image";

    $.ajax({
        url: searchUrl,
        success: function(result){
            for(var i=0;i<40;i++){
                $("#myModalLibrary").append('<div class="responsive"><div class="gallery"><a target="_blank" href="'+result.collection.items[i].links[0].href+'"><img  width="600" height="400" src="'+result.collection.items[i].links[0].href+'"></a></div></div>');
            }
        }
    });
    openModalLibrary();
}

function openModal() {
    document.getElementById("dailyModal").style.display = "block";
}

function openModalLibrary() {
    document.getElementById("myModalLibrary").style.display = "block";
}

function closeModal() {
    document.getElementById("dailyModal").style.display = "none";
}

function closeModalLibrary() {
    document.getElementById("myModalLibrary").style.display = "none";
}
