import App from './app.model.js';
const app = new App()
initEventHandlers();

function initEventHandlers(){
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
    $('#fontFamily').focusout(() => {
        app.setFontFamily($('#fontFamily').val())
    })

    $('#createButton').click(() => {
        app.createButton()
    })

    setTimeout(() => {
        // $('.app_panel_preview_button').css('transform', 'translate(-50%,-50%) scale(1)')
    }, 3000);
}