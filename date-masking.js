document.addEventListener("DOMContentLoaded", function() {
    // Function to mask date input
    function createDateMask(inputId, format) {
        const input = document.getElementById(inputId);
        if (!input) return;
        
        input.addEventListener("input", function(e) {
            let value = this.value.replace(/[^0-9]/g, '');
            
            // Format based on pattern
            if (format === 'mm/dd/yyyy') {
                if (value.length > 8) value = value.substring(0,8);
                if (value.length >= 2) value = value.substring(0,2) + '/' + value.substring(2);
                if (value.length >= 5) value = value.substring(0,5) + '/' + value.substring(5,8);
            } else if (format === 'mm/dd/yy') {
                if (value.length > 6) value = value.substring(0,6);
                if (value.length >= 2) value = value.substring(0,2) + '/' + value.substring(2);
                if (value.length >= 5) value = value.substring(0,5) + '/' + value.substring(5,6);
            }
            
            this.value = value;
        });
        
        // Validate on blur
        input.addEventListener("blur", function() {
            if (this.value && !this.checkValidity()) {
                this.setCustomValidity(this.title);
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Apply masks
    createDateMask('driver-birth-date', 'mm/dd/yyyy');
    createDateMask('driver-license-date', 'mm/dd/yy');
});
