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

    $("body").on("change", "#illustrationsOfCurrentProposedSalarySpan", function(){

        //alert('In illustrationsOfCurrentProposedSalarySpan change');
        
        let input = document.getElementById('illustrationsOfCurrentProposedSalary');

        uploadArray = [];

        //console.log('input.files : ' + JSON.stringify(e));

        for (var x = 0; x < input.files.length; x++) {

            uploadArray.push(input.files[x].name);
            
        }

        //console.log(uploadArray);

        createStructure(uploadArray, 'removeFile');

    });

    $("body").on("click", ".removeFile", function(){

        //alert('In removeFile click');

        let arrIndex = $(this).parent('li').index();

        console.log('Before pop' + uploadArray);

        console.log(arrIndex);

        uploadArray.splice(arrIndex, 1);

        console.log('After pop' + uploadArray);

        if(uploadArray.length <= 0){

            $('#illustrationsOfCurrentProposedSalary').val('');

        }

        createStructure(uploadArray, 'removeFile');
        
    });

    $("body").on("change", "#approvedScaleOfGrade", function(e){

        let input = document.getElementById('approvedScaleOfGrade');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#approvedScaleOfGradeErr').css('display', 'none');

        }else{

            $('#approvedScaleOfGradeErr').css('display', 'block');

            $('#approvedScaleOfGrade').val('');

        }

    });

    $("body").on("change", "#salaryCompensationPolicy", function(e){

        let input = document.getElementById('salaryCompensationPolicy');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#salaryCompensationPolicyErr').css('display', 'none');

        }else{

            $('#salaryCompensationPolicyErr').css('display', 'block');

            $('#salaryCompensationPolicy').val('');

        }

    });

    $("body").on("change", "#proposedScale", function(e){

        let input = document.getElementById('proposedScale');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'xls' || fileExtension == 'xlsx'){

            $('#proposedScaleErr').css('display', 'none');

        }else{

            $('#proposedScaleErr').css('display', 'block');

            $('#proposedScale').val('');

        }

    });

    $("body").on("change", "#tableOfalignmentOfGrade", function(e){

        let input = document.getElementById('tableOfalignmentOfGrade');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#tableOfalignmentOfGradeErr').css('display', 'none');

        }else{

            $('#tableOfalignmentOfGradeErr').css('display', 'block');

            $('#tableOfalignmentOfGrade').val('');

        }

    });

    $("body").on("change", "#comparativeStudy", function(e){

        let input = document.getElementById('comparativeStudy');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#comparativeStudyErr').css('display', 'none');

        }else{

            $('#comparativeStudyErr').css('display', 'block');

            $('#comparativeStudy').val('');

        }

    });

    $("body").on("change", "#detailOfAnnualCost", function(e){

        let input = document.getElementById('detailOfAnnualCost');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'xls' || fileExtension == 'xlsx'){

            $('#detailOfAnnualCostErr').css('display', 'none');

        }else{

            $('#detailOfAnnualCostErr').css('display', 'block');

            $('#detailOfAnnualCost').val('');

        }

    });

    $("body").on("change", "#entityChairmanApprove", function(e){

        let input = document.getElementById('entityChairmanApprove');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#entityChairmanApproveErr').css('display', 'none');

        }else{

            $('#entityChairmanApproveErr').css('display', 'block');

            $('#entityChairmanApprove').val('');

        }

    });
    
});

