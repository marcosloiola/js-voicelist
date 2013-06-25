var reco = new WebSpeechRecognition();
reco.continuous = true;


// Handler for speech recognition results.
reco.recognition.onresult = function (event) {

    var transcript = '';

    // Process all new results, both final and interim.
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
    }

    transcript = transcript.trim();

    if (transcript == 'nova lista') {

        $('#itemList').empty();

    } else if (transcript == 'apagar') {

        $('#itemList div:last-child').remove();

    } else if (transcript == 'enviar') {

        var body = '';

        $("#itemList > div").each( function() {
            body += $(this).html() + "%0a";
        });

        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marcos.loiola@gmail.com&su=Voice List&body='+ body);

    } else {

        var item = $('<div/>')
            .addClass('item')
            .html(transcript);

        $('#itemList').append(item);


    }

};


function microfone() {
    reco.toggleStartStop();
}

reco.start();
