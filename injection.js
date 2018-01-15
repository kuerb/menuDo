window.onload = function() {

    var input=document.createElement("input");



    input.type="button";
    input.value="×";
    input.onclick = toggleSidebar;
    input.setAttribute("style", "font-size:28px;cursor:pointer;position:absolute;top:0px;left:280px;border: none;background:rgba(0, 0, 0, 0);color: white;height:52px;width:52px;text-align: center;text-decoration: none;padding: 8px 24px;transition: 1s;");
    document.body.appendChild(input); 
    var sidebarClosed=false;
   
    waitTillFullyLoaded();

    function waitTillFullyLoaded(){
        if(document.URL!="https://todo.microsoft.com/"){ //this does not seem to be very robust, but it's quick and ditry
            //alert(document.URL);
            setTimeout(waitTillFullyLoaded, 150);//wait 50 millisecnds then recheck
            return;
        }else{
            setTimeout(toggleSidebar(), 10);;
            //document.getElementsByClassName('cortanaButton')[0].click();
        }
    };

            
    function toggleSidebar()
    {
        //transitionString = transitionString || "1s";
        var sidebar = document.getElementById("sidebar");
        var bg = document.getElementsByClassName('themeBackground');


        if (sidebarClosed){
        	    
            
        	sidebar.style.width="280px";

        	for (var i = 0, len = bg.length; i < len; i++) {
                bg[i].style.transition="0.5s ease";
                bg[i].style.left="280px";
            }
        	sidebarClosed=false;
        	input.value="×";
        	
    		input.setAttribute("style", "font-size:28px;cursor:pointer;position:absolute;top:0px;left:280px;border: none;background:rgba(0, 0, 0, 0);color: white;height:52px;width:52px;text-align: center;text-decoration: none;padding: 8px 24px;transition: 0.5s ease;");
        }else{

            sidebar.style.transition = "0.5s ease";
    		sidebar.style.width="0";
            for (var i = 0, len = bg.length; i < len; i++) {
                bg[i].style.transition="0.5s ease";
                bg[i].style.left="0px";
            }

    		sidebarClosed=true;

        	input.value="≡";
        	input.setAttribute("style", "font-size:28px;cursor:pointer;position:absolute;top:0px;left:0px;border: none;background:rgba(0, 0, 0, 0);color: white;height:52px;width:52px;text-align: center;text-decoration: none;padding: 8px 24px;transition: 0.5s ease;");
        }

        
    };
    document.body.appendChild(script);


};
