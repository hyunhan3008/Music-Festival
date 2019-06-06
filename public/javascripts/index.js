function sendAjaxQuery(url, data) {
    const input= JSON.stringify(data);
    $.ajax({
        url: url ,
        data: input,
        contentType: 'application/json',
        type: 'POST',
        success: function (dataR) {
            // no need to JSON parse the result, as we are using
            // dataType:json, so JQuery knows it and unpacks the
            // object for us before returning it
            var ret = dataR;
            // in order to have the object printed by alert
            // we need to JSON stringify the object
            document.getElementById('results').innerHTML= JSON.stringify(ret);
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onSubmit() {
    // const data = JSON.stringify($(this).serializeArray());
    const data= document.getElementById('array_of_people').value;
    try{
        sendAjaxQuery('/index', JSON.parse(data));
    } catch (e){
        alert('not a valid JSON structure '+e);
    }
    event.preventDefault();
}

