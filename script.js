//Layout config (FullPage.js)
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['1', '2', '3'],
    navigationTooltips: ['Home', 'About me', 'Projects'],
    showActiveTooltips: true,
    scrollingSpeed: 700,
    controlArrows: false, 
    slidesNavigation: true, 
    credits: {enabled: false},
}) 

//Writing Animation
var x = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 150;

    function typeWriter() {
      if (x <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , x + 1);
        x++;
        setTimeout(typeWriter, speed);
      }
    }

typeWriter();


//Close options
a.addEventListener('click', fechar())
function fechar() {
    const checkbox = document.getElementById('icon')
    const a = document.getElementsByClassName('a')

    checkbox.checked = false
}
