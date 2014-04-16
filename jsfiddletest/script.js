jQuery(function($) {

    var main_content = $('.col_two'),
        gen_box = null,
        i  = 1;

    //fade out welcome button and remove it
    $('.start-button').click(function() {
        welcome_area.fadeOut('slow', function() {
            $(this).remove();
            //when welcome button is removed fade in the css module and make .col_two selectable
            css_module.fadeIn('slow').resizable().draggable();
        }); //end start button fade callback function
    });//end start button click
    
    //make .col_two selectable and...
    main_content.selectable({ 
                start: function(e) {
                        
                        //get the mouse position on start
                        x_begin = e.pageX,
                        y_begin = e.pageY;

                    },
                stop: function(e) {
                        
                        //get the mouse position on stop
                        x_end = e.pageX,
                        y_end = e.pageY;

                        /***  if dragging mouse to the right direction, calcuate width/height  ***/

                        if( x_end - x_begin >= 1 ) {
                            width  = x_end - x_begin,
                            height = y_end - y_begin;
                        
                        /***  if dragging mouse to the left direction, calcuate width/height (only change is x) ***/
                        
                        } else {
                            
                            width  = x_begin - x_end,
                            height =  y_end - y_begin;
                            var drag_left = true;
                        }
                        
                        //append a new div and increment the class and turn it into jquery selector
                        $(this).append('<div id="window'+ i +'" class="gen_box_' + i + '"></div>');
                        gen_box = $('.gen_box_' + i);

                        //add css to generated div and make it resizable & draggable
                        $(gen_box).css({
                             'background': '#fff',
                             'width'     : width,
                             'height'    : height,
                             'position'  : 'absolute',
                             'left'      : x_begin,
                             'top'         : y_begin
                        })
                        .draggable({ grid: [20, 20] })
                        .resizable();

                        //if the mouse was dragged left, offset the gen_box position 
                        //drag_left ? $(gen_box).offset({ left: x_end, top: y_begin }) : false;
                        console.log( 'width: ' + width + 'px');
                        console.log( 'height: ' + height + 'px' );
                        //add thr styles of generated div into .inner_col_one
                        i++;
                }});
});