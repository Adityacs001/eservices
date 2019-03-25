$(document).ready(function(){

    var uploadArray = [];
    var uploadArray2 = [];

    function createStructure(uploadArray, customFileSpan, removeFile) {

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

        $("." + customFileSpan).html(disp);
    
    }

    $("body").on("change", "#attachedFilesSpan", function(){

        //alert('In attachedFilesSpan change');
        
        let input = document.getElementById('attachedFiles');

        uploadArray = [];

        //console.log('input.files : ' + JSON.stringify(e));

        for (var x = 0; x < input.files.length; x++) {

            uploadArray.push(input.files[x].name);
            
        }

        //console.log(uploadArray);

        createStructure(uploadArray, 'custom-file-upload', 'removeFile');

    });

    $("body").on("click", ".removeFile", function(){

        //alert('In removeFile click');

        let arrIndex = $(this).parent('li').index();

        console.log('Before pop' + uploadArray);

        console.log(arrIndex);

        uploadArray.splice(arrIndex, 1);

        console.log('After pop' + uploadArray);

        if(uploadArray.length <= 0){

            $('#attachedFiles').val('');

        }

        createStructure(uploadArray, 'custom-file-upload', 'removeFile');
        
    });

    $("body").on("change", "#attachedFiles2Span", function(){

        //alert('In attachedFiles2Span change');
        
        let input = document.getElementById('attachedFiles2');

        uploadArray2 = [];

        for (var x = 0; x < input.files.length; x++) {

            uploadArray2.push(input.files[x].name);
            
        }

        //console.log(uploadArray2);

        createStructure(uploadArray2, 'custom2-file-upload', 'removeFile2');

    });

    $("body").on("click", ".removeFile2", function(){

        //alert('In removeFile2 click');

        let arrIndex = $(this).parent('li').index();

        console.log('Before pop' + uploadArray2);

        console.log(arrIndex);

        uploadArray2.splice(arrIndex, 1);

        console.log('After pop' + uploadArray2);

        if(uploadArray2.length <= 0){

            $('#attachedFiles2').val('');

        }

        createStructure(uploadArray2, 'custom2-file-upload', 'removeFile2');
        
    });

});

