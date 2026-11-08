console.log("Site chargé !");
document.querySelectorAll('a[href^="#"]').forEach(lien => {
  lien.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
