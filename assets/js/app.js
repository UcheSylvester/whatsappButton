import App from './app.model.js';
var app = new App()

    /* Event Handlers */
    //IconStyle Select Input
    $('#iconStyle').change(() => {
        app.setIconStyle($('#iconStyle').val())
    })

    //Phone Number Input
    $('#phoneNumber').keyup(() => {
        app.validatePhoneNumber($('#phoneNumber').val())
    })
    
    //Welcome Message Input
    $('#wMessage').keyup(() => {
        app.setWMessage($('#wMessage').val())
    })

    //Placeholder Message Input
    $('#phMessage').keyup(() => {
        app.setPhMessage($('#phMessage').val())
    })

    //Main Color Input
    $('#mainColor').change(() => {
        app.setMainColor($('#mainColor').val())
    })

    //Sub Color Input
    $('#subColor').change(() => {
        app.setSubColor($('#subColor').val())
    })

    //Text Color Input
    $('#textColor').change(() => {
        app.setTextColor($('#textColor').val())
    })

    //Font Family Input
    $('#fontFamily').keyup(() => {
        app.setFontFamily($('#fontFamily').val())
    })

    $('#createButton').click(() => {
        app.createButton()
    })