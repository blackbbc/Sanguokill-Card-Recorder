chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 800,
            'height': 800
        },
        maxWidth: 800,
        maxHeight: 800
    });
});
