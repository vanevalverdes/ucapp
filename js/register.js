
    // Get Form, Serialize, call register function
    
        document.addEventListener( "DOMContentLoaded", function() {
            var form = document.getElementById( "registerForm" );
            form.addEventListener( "submit", function( e ) {
                e.preventDefault();
                var json = toJSONString( form );
                createRecord(json)
            }, false);
            
        });
    
