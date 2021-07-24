    
    // Send JSON to Login API    

        function login(cb) {
            apiClient(`${serverUrl}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: cb
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                const authHash = data.authhash;
                const iduser = data.key;
                window.location.href= `/register.html?authHash=${authHash}&user=${iduser}`
          });
        }
    
    // Get Form, Serialize, call login function
    
        document.addEventListener( "DOMContentLoaded", function() {
            var form = document.getElementById( "formlogin" );
            form.addEventListener( "submit", function( e ) {
                e.preventDefault();
                var json = toJSONString( form );
                login(json)
            }, false);
            
        });

    
