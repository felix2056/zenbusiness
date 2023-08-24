(function(){
    const   headerPhone = document.querySelector('.header-phone'),
            headerPhoneToggle = document.querySelector('.header-btn-phone-toggle'),
            date = new Date(),
            day = date.toLocaleString('en-US', { timeZone: 'America/Chicago', weekday: 'short' }),
            hour = date.toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: false, hour: '2-digit' });

    if(day === 'Sun'){
        if(hour >= 9 && hour < 18){
            showPhone();
        }
    } else if (day !== 'Sat') {
        if(hour >= 8 && hour < 20){
            showPhone();
        }
    }

    function showPhone(){
        setTimeout( () => {
            if(headerPhone){
                headerPhoneToggle.classList.remove('hidden');
                headerPhone.classList.remove('hidden');
            }
        }, 2000);

    }
})();
