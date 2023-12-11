function convertData (data) {

}


/**
 * Converts the file data using the convertData method.
 *
 * @return {void} - Returns nothing.
 */
function processData() {
    convertData(this.result);
}

/**
 * Checks if a single file is selected by the user.
 *
 * @param {Event} e - The event object representing the file selection.
 *
 * @return {void}
 */
function processSingleFile(e) {
    if (e.target.files.length !== 1) {
        window.alert('Please select one File for import.')
        return
    }

    let file = e.target.files[0];
    readAndProcessFile(file);
}

/**
 * Reads a file using FileReader and processes it.
 *
 * @param {File} file - The file to be processed.
 *
 * @return {void}
 */
function readAndProcessFile(file) {
    let reader = new FileReader();
    reader.onloadend = processData;
    reader.readAsText(file);
}

document.getElementById('fileInput').addEventListener('change', processSingleFile);