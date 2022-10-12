$(document).ready(function() {
    const darkmodeToggle = document.getElementById
    ('darkmode-toggle')
    darkmodeToggle.addEventListener('click', function() {
      const theme = $('html').attr('data-theme');
      if(theme == 'light') {
        // * CHANGE TO DARK
        alert("Ganti ke mode negatif?")
        $('html').css({'filter': 'invert(1)'})
        $('html').attr('data-theme', 'dark');
        darkmodeToggle.innerHTML = 'negative Mode'
        
      } else {
        // * CHANGE TO LIGHT
        alert("Ganti ke mode terang?")
        $('html').removeAttr('style');
        $('html').attr('data-theme', 'light')
        darkmodeToggle.innerHTML = 'Light Mode'
        
      }
    });
  });

  const newspaperSpinning = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  }
  
  const newspaper = document.querySelector(".newspaper");
  
  newspaper.addEventListener('click', () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
  });