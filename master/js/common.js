pioneer.common = {
    initialNav: function(){
        $(".button-collapse").sideNav({
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        });
    },

    initialTileBlock: function(){
        adjustThreeColumnWidth();
        
        $(window).resize(function() {
            adjustThreeColumnWidth();
        });

        function adjustThreeColumnWidth(){
            var vpWidth = $(window).width();
            var intervalWidth = Math.floor(vpWidth / 3);
            var gap = vpWidth - intervalWidth * 3;

            if(vpWidth >= 600){
                $('.block-tile .block__three-column').each(function(index, elem){
                    if(index == 0){
                        $(elem).width(intervalWidth + gap);
                        isFirst = false;
                    } else {
                        $(elem).width(intervalWidth);
                    }
                    $(elem).height(intervalWidth);
                });            
            } else {
                $('.block-tile .block__three-column').each(function(index, elem){
                    $(elem).width(vpWidth);
                    $(elem).height(vpWidth);
                });            
            }
        }

        var feed = new Instafeed({
            get: 'user',
            userId: 1268599184,
            accessToken: '1268599184.a110f59.fca8520d90054229a9166be386104252',
            target: 'instagram',
            resolution: 'standard_resolution',
            limit: '1',
            sortBy: 'most-recent',
            target: 'instagram_wrapper',
            template: '<div class="block__hover-zoom" style="background-image: url({{image}});"></div>',
            after: function() {
                $('#default-instagram').hide();
            }
        });    

        feed.run();        
    }
}