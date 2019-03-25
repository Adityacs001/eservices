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

    $("body").on("change", "#prevcurrentreportSpan", function(){

        //alert('In prevcurrentreportSpan change');
        
        let input = document.getElementById('prevcurrentreport');

        uploadArray = [];

        //console.log('input.files : ' + JSON.stringify(e));

        for (var x = 0; x < input.files.length; x++) {
			let fileName = input.files[x].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            uploadArray.push(input.files[x].name);
            
        }}

        //console.log(uploadArray);

        createStructure(uploadArray, 'removeFile');

    });

    $("body").on("click", ".removeFile", function(){

        let arrIndex = $(this).parent('li').index();

        //console.log('Before pop' + uploadArray);

        //console.log(arrIndex);

        uploadArray.splice(arrIndex, 1);

        //console.log('After pop' + uploadArray);

        if(prevcurrentreport.length <= 0){

            $('#prevcurrentreport').val('');

        }

        createStructure(uploadArray, 'removeFile');
        
    });

	$("body").on("change", "#Approved1", function(e){

        let input = document.getElementById('Approved1');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#Approved1Err').css('display', 'none');

        }else{

            $('#Approved1Err').css('display', 'block');

            $('#Approved1').val('');

        }

    });
	
	$("body").on("change", "#employeephoto", function(e){

        let input = document.getElementById('employeephoto');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'jpeg' || fileExtension == 'jpg' || fileExtension == 'png'){

            $('#employeephotoErr').css('display', 'none');

        }else{

            $('#employeephotoErr').css('display', 'block');

            $('#employeephoto').val('');

        }

    });

    $("body").on("change", "#lastprocedure", function(e){

        let input = document.getElementById('lastprocedure');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#lastprocedureErr').css('display', 'none');

        }else{

            $('#lastprocedureErr').css('display', 'block');

            $('#lastprocedure').val('');

        }

    });

});

