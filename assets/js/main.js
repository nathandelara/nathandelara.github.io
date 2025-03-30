jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });


});

function ouvrirOnglet(ongletId) {
    // Cacher tous les contenus d'onglets
    var ongletContenus = document.querySelectorAll('.onglet-contenu');
    ongletContenus.forEach(function(contenu) {
        contenu.style.display = 'none';
    });

    // Retirer la classe "active" de tous les boutons d'onglets
    var ongletBoutons = document.querySelectorAll('.onglet-bouton');
    ongletBoutons.forEach(function(bouton) {
        bouton.classList.remove('active');
    });

    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(ongletId).style.display = 'block';

    // Ajouter la classe "active" au bouton d'onglet actif
    var boutonActif = document.querySelector('.onglet-bouton[onclick="ouvrirOnglet(\'' + ongletId + '\')"]');
    boutonActif.classList.add('active');
}

// Afficher le premier onglet par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    ouvrirOnglet('onglet1'); // Ouvre l'onglet 1 par défaut
});
