$(document).ready(function(){

    var uploadArray = [];

    function createStructure(uploadArray, removeFile) {

        let disp = '';

        console.log('uploadArray.length : ' + uploadArray.length);

        if(uploadArray.length > 0){

            disp = '<ul class="list-group">';
    
            for (let x = 0; x < uploadArray.length; x++) {
        
                let temp = uploadArray[x].split(".");
        
                temp = temp[temp.length - 1];
        
                if (x % 2 == 0) {
        
                    disp += '<li class="list-group-item">' + uploadArray[x] + '<i style="margin-left: 15px;cursor:pointer;" id="deleteFile' + x + '" class="glyphicon glyphicon-trash pull-right '+ removeFile +'"></i></li>';
            
                }
                else {
        
                    disp += '<li class="list-group-item" style="background-color:#03a9f4;">' + uploadArray[x] + '<i style="margin-left: 15px;cursor:pointer;" id="deleteFile' + x + '" class="glyphicon glyphicon-trash pull-right '+ removeFile +'"></i></li>';
                
                }
        
            }
        
            disp += '</ul>';

        }

        $(".custom-file-upload").html(disp);
    
    }

    $("body").on("change", "#support_requestSpan", function(){

        //alert('In support_request change');
        
        let input = document.getElementById('support_request');

        uploadArray = [];

        //console.log('input.files : ' + JSON.stringify(e));

        for (var x = 0; x < input.files.length; x++) {

            let fileName = input.files[x].name;
            fileExtension = fileName.replace(/^.*\./, '');

            //if(fileExtension == 'pdf'){

                uploadArray.push(input.files[x].name);

            //}
            
        }

        //console.log(uploadArray);

        createStructure(uploadArray, 'removeFile');

    });

    $("body").on("click", ".removeFile", function(){

        //alert('In removeFile click');

        let input = document.getElementById('support_request');

        //uploadArray = [];

        let arrIndex = $(this).parent('li').index();

        console.log('Before pop' + uploadArray);

        console.log(arrIndex);

        uploadArray.splice(arrIndex, 1);

        console.log('After pop' + uploadArray);

        createStructure(uploadArray, 'removeFile');
        
    });

    $("body").on("change", "#entity_formal_request", function(){

        let input = document.getElementById('entity_formal_request');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#entity_formal_requestErr').css('display', 'none');

        }else{

            $('#entity_formal_requestErr').css('display', 'block');
			document.getElementById('entity_formal_request').value="";

        }

    });

    

});

