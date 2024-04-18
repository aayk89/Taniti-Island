// Add any JavaScript functionality or interactions here if needed

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});


window.addEventListener('load', function() {
   var mainContent = document.getElementById('main-content');
   setTimeout(function() {
      mainContent.classList.add('fade-in');
   }, 300);
});

function search() {
   var searchTerm = document.getElementById("search-input").value;
   alert("You searched for: " + searchTerm);
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
