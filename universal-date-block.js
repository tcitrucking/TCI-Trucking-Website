<script>
document.addEventListener("DOMContentLoaded", function() {
    console.log("Universal date blocker loaded");
    
    // Block letters in ANY field with 'date' in ID or placeholder
    document.querySelectorAll('input').forEach(input => {
        const id = input.id.toLowerCase();
        const placeholder = (input.placeholder || '').toLowerCase();
        
        if (id.includes('date') || placeholder.includes('date') || 
            placeholder.includes('mm/dd')) {
            
            console.log("Blocking letters in:", input.id || 'no-id');
            
            // BLOCK LETTERS COMPLETELY
            input.addEventListener('keydown', function(e) {
                // Only allow: numbers, slash, backspace, delete, arrows, tab
                const allowedKeys = [
                    '0','1','2','3','4','5','6','7','8','9',
                    '/',
                    'Backspace','Delete','Tab',
                    'ArrowLeft','ArrowRight','ArrowUp','ArrowDown'
                ];
                
                if (!allowedKeys.includes(e.key) && 
                    !(e.ctrlKey && ['a','c','v','x'].includes(e.key.toLowerCase()))) {
                    e.preventDefault();
                    return false;
                }
            });
            
            // Auto-format
            input.addEventListener('input', function() {
                // Remove any letters that got through
                let value = this.value.replace(/[^0-9\/]/g, '');
                
                // Auto-add slashes
                const digits = value.replace(/\//g, '');
                if (digits.length >= 2) {
                    value = digits.substr(0,2) + '/' + digits.substr(2);
                }
                if (digits.length >= 4) {
                    value = digits.substr(0,2) + '/' + digits.substr(2,2) + '/' + digits.substr(4);
                }
                
                this.value = value;
            });
            
            // Block paste of letters
            input.addEventListener('paste', function(e) {
                e.preventDefault();
                const pasted = (e.clipboardData || window.clipboardData).getData('text');
                const numbers = pasted.replace(/[^0-9]/g, '');
                this.value = numbers.substr(0, 8); // Max 8 digits
                this.dispatchEvent(new Event('input'));
            });
        }
    });
});
</script>
