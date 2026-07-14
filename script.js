const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const fingerprintArea = document.getElementById('fingerprintArea');
const errorMsg = document.getElementById('errorMsg');

let pressTimer;

// Passcode verification logic
function checkPasscode() {
    const code = document.getElementById('passcodeInput').value.trim().toLowerCase();
    
    // Set passcode to 'nishad'
    if (code === 'nishad') {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
}

// Fingerprint Hold to Unlock logic
function startPress() {
    fingerprintArea.style.transform = 'scale(0.92)';
    pressTimer = setTimeout(() => {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
    }, 2000); // Must hold for 2 seconds to unlock the story
}

function endPress() {
    clearTimeout(pressTimer);
    fingerprintArea.style.transform = 'scale(1)';
}

// Add event listeners for fingerprint
fingerprintArea.addEventListener('mousedown', startPress);
fingerprintArea.addEventListener('mouseup', endPress);
fingerprintArea.addEventListener('mouseleave', endPress);

fingerprintArea.addEventListener('touchstart', (e) => { 
    e.preventDefault(); 
    startPress(); 
});
fingerprintArea.addEventListener('touchend', endPress);
                                 
