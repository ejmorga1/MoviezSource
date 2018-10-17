let haveCityID = false;
$.ajax({
    url: "https://api.internationalshowtimes.com/v4/cities",
    type: "GET",
    data: {
        "page_size": 1,
        "query": "Cleveland",
        "countries": "US",
    },
    headers: {
        "X-API-Key": "a313ypicnkANFfnIeVIFJrCpaUcYj12P",
    },
})
    .done(function (data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data.cities[0].id);

        haveCityID = true;

        $.ajax({
            url: "https://api.internationalshowtimes.com/v4/cinemas",
            type: "GET",
            data: {
                "page_size": 1,
                "city_ids": data.cities[0].id,
                "countries": "US"
            },
            headers: {
                "X-API-Key": "a313ypicnkANFfnIeVIFJrCpaUcYj12P"
            }
        }).done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        });
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
    .always(function () {
        /* ... */
    });