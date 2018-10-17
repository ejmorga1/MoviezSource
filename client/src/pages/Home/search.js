import $ from "jquery";



$(document).ready(function () {

    function clearDiv(element) {
        $("#results").html("");
    }

    $("#searchBtn").on("click", function () {
        window.event.preventDefault();
        clearDiv();

        let userInput = $("#searchBar").val();
        const key = "api_key=c473eb512205a37f77691399c75dee0b";
        let URL = `https://api.themoviedb.org/3/search/movie?${key}&language=en-US&query=${userInput}&page=1&include_adult=false`;
        let URLid = `https://api.themoviedb.org/3/search/movie/movie_id?${key}&language=en-US&query=${userInput}&page=1&include_adult=false`;

        $.ajax({
            url: URL,
            method: "GET"
        }).then(function (response) {
            //console.log(response);
            let results = response.results;
            for (let i = 0; i < results.length; i++) {

              



                let tableText = `<div class="row"><br/><h3 class="movietitle" id=title${i}>${results[i].title}</h3></div>`;
                let tableImg = `<div class="row"><img class="movieimage" src='https://image.tmdb.org/t/p/original${results[i].poster_path}' height='300' width='200'><br/><br/><p class='overview'><font size='3'>${results[i].overview}</p><br/></div>`;
                let wishlistBtn = `<div class="row"><div class="col-6"><button class="moviebtn btn btn-success" movietitle="${results[i].title}" movieid=${results[i].id} type='button' class='' id='wishlistBtn${[i]}' style=''>Add to Wishlist</button></div>`;
                let watchedBtn = `<div class="col-6"><button class="moviebtn btn btn-success" movietitle="${results[i].title}" movieid=${results[i].id} type='button' class='' id='watchedBtn${[i]}' style=''>Add to Watched</button></div></div><hr/>`;
                let movieTable = `<div id=movieTable-${[i]} style=''><td>${tableText}${tableImg}`;
                let movieTableInfo = $(`#movieTable-${[i]}`).data(`${[i]}`, { media_id: results[i].id, media_name: results[i].title })
                let newTable = $("#results").append(`${movieTable}${wishlistBtn}${watchedBtn}</ls></td>`).data({ media_id: results[i].id, media_name: results[i].title });

                $("#wishlistBtn" + [i]).on("click", function () {

                    //console.log($(this).attr("movietitle"));

                    $("#wishlist-table").append(`${movieTable} <br><br><button type='button' class='btn btn-danger btn-sm' id='rmv-${$(this).attr("id")}' style='float: left'>Remove from Wishlist</button><br><hr>`);
                    $("#wishlist-table").find("p.overview").html("")


                    $(`#rmv-${$(this).attr("id")}`).on("click", function () {
                        $(this).parent().parent().html("");

                    });
                });

                //Add movie to reviewed list
                $("#watchedBtn" + [i]).on("click", function () {

                   // console.log($(this).attr("movietitle"));

                    $("#reviews-table").append(`${movieTable} <br><br><button type='button' class='btn btn-danger btn-sm' id='rmv-${$(this).attr("id")}' style='float: left'>Remove from Watched list</button><br><hr>`)
                    $("#reviews-table").find("p.overview").html("")
                    $(`#rmv-${$(this).attr("id")}`).on("click", function () {
                        //console.log($(this).parent().parent().attr("id"));
                        $(this).parent().parent().html("");

                    });
                });
            };
        });
    });
});
