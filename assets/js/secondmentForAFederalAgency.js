$(document).ready(function(){

	$("body").on("change", "#approvalOfEmployee", function(e){

        let input = document.getElementById('approvalOfEmployee');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#approvalOfEmployeeErr').css('display', 'none');

        }else{

            $('#approvalOfEmployeeErr').css('display', 'block');

            $('#approvalOfEmployee').val('');

        }

    });
	
	$("body").on("change", "#copyOfHRCommittee", function(e){

        let input = document.getElementById('copyOfHRCommittee');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#copyOfHRCommitteeErr').css('display', 'none');

        }else{

            $('#copyOfHRCommitteeErr').css('display', 'block');

            //$('#copyOfHRCommittee').val('');

        }

    });
	
	$("body").on("change", "#copyOfLastYearEfficiencyReport", function(e){

        let input = document.getElementById('copyOfLastYearEfficiencyReport');

        let fileName = input.files[0].name;

        fileExtension = fileName.replace(/^.*\./, '');

        console.log('fileExtension : ' + fileExtension);

        if(fileExtension == 'pdf'){

            $('#copyOfLastYearEfficiencyReportErr').css('display', 'none');

        }else{

            $('#copyOfLastYearEfficiencyReportErr').css('display', 'block');

            $('#copyOfLastYearEfficiencyReport').val('');

        }

    });
	

});

