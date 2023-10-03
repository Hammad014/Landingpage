
function togglefunction(faqNumber) {
    const faqDetails = document.querySelectorAll('.faq-details');

    for (let i = 0; i < faqDetails.length; i++) {
        if (i + 1 === faqNumber) {
            if (faqDetails[i].style.display === 'block') {
                faqDetails[i].style.display = 'none'; 
            } else {
                faqDetails[i].style.display = 'block'; 
            }
        } else {
            faqDetails[i].style.display = 'none'; 
        }
    }
}

