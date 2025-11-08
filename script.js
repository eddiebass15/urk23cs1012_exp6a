$(document).ready(function() {
    // Initialize with default values
    calculateBudget();
    
    // Calculate when button is clicked
    $('#evaluateBtn').click(function() {
        calculateBudget();
    });
    
    // Calculate when any input changes
    $('input').on('input', function() {
        calculateBudget();
    });
    
    function calculateBudget() {
        // Get input values
        const amount = parseFloat($('#amount').val()) || 0;
        const roomRentPercent = parseFloat($('#roomRent').val()) || 0;
        const accessoriesPercent = parseFloat($('#accessories').val()) || 0;
        const emergencyPercent = parseFloat($('#emergency').val()) || 0;
        const savingPercent = parseFloat($('#saving').val()) || 0;
        
        // Calculate total percentage
        const totalPercent = roomRentPercent + accessoriesPercent + emergencyPercent + savingPercent;
        
        // Check if percentages add up to 100%
        if (totalPercent !== 100) {
            $('#alertMessage').show();
            return;
        } else {
            $('#alertMessage').hide();
        }
        
        // Calculate amounts
        const roomRentAmount = (amount * roomRentPercent) / 100;
        const accessoriesAmount = (amount * accessoriesPercent) / 100;
        const emergencyAmount = (amount * emergencyPercent) / 100;
        const savingAmount = (amount * savingPercent) / 100;
        
        // Update result display
        $('#roomRentResult').text('Rs.' + roomRentAmount.toFixed(2));
        $('#accessoriesResult').text('Rs.' + accessoriesAmount.toFixed(2));
        $('#emergencyResult').text('Rs.' + emergencyAmount.toFixed(2));
        $('#savingResult').text('Rs.' + savingAmount.toFixed(2));
    }
});