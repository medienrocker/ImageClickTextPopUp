//<script> uncomment the script tags if you want to use it in a textbox in moodle
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.toggle-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            var text = document.getElementById(targetId).innerHTML;
            document.getElementById('display-text').innerHTML = text;
        });
    });
});
//</script>