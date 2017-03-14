
pioneer.contactus = function() {
    pioneer.common.initialNav();

    $('#send_message_link').click(function(e){
    	if($('.block-contact-form__fields').css('display') != 'none'){
    		$('.block-contact-form__fields').toggle('hide');
	    	$('#send_message_link span').text('Message Sent');
    	}
    	e.preventDefault();
    });
}