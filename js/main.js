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
