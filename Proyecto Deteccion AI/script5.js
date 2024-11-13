document.getElementById('manualReportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const reportContent = document.getElementById('report').value;
    if (reportContent.trim() !== '') {
        document.getElementById('reportContent').innerText = reportContent;
        document.getElementById('savedReport').style.display = 'block';
        alert('Reporte guardado exitosamente.');
    } else {
        alert('Por favor, ingresa la descripción del reporte.');
    }
});