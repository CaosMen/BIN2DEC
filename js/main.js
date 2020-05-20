function IsNumber (evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode >= 48 && charCode <= 49)
        return true;
    return false;
}    

function Convert () {
    let BinaryInput = document.getElementById("BinaryInput").value;
    let DecimalOutput = 0;

    if (BinaryInput != "") {
        for(i = 0; BinaryInput != 0; i++){
            DecimalOutput += Math.pow(2, i) * parseInt(BinaryInput[BinaryInput.length - 1]);
            BinaryInput = BinaryInput.substring(0, BinaryInput.length - 1);
        }
    
        document.getElementById("DecimalOutput").value = DecimalOutput;
    } else {
        document.getElementById("DecimalOutput").value = "";
    }
}

function ResetAll () {
    document.getElementById("BinaryInput").value = "";
    document.getElementById("DecimalOutput").value = "";
}

function CopyInfo () {
    var copyText = document.getElementById("DecimalOutput");
    copyText.disabled = false;
    copyText.select();
    document.execCommand("copy");
    copyText.disabled = true;
}