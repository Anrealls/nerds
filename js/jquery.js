/**
 * Created by fordc on 23.08.2017.
 */
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [ 0, 10000 ],
        step : 100,
        slide: function( event, ui ) {
            $( "#amount" ).val(ui.values[ 0 ]);
            $( "#amount_1" ).val(ui.values[ 1 ]);
        }
    });
} );