let convertData = function (data) {

};


document.getElementById('fileInput').addEventListener('change', function(e) {
    if (e.target.files.length !== 1) {
        window.alert('Please select one File for import.')
    }

    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (function() {
        return function(e) {
            document.getElementById('fileContent').innerText = e.target.result;
        };
    })(file);

    reader.onLoadEnd = function () {
        convertData(reader.result);
    }

    reader.readAsText(file);
});