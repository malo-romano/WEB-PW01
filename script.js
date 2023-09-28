hasVoted = false;

function vote(name) {
    if (!hasVoted) {

        var voteUser = confirm("Souhaitez-vous voter pour " + name + " ?");
        // Vérifiez la réponse de l'utilisateur
        if (voteUser) {
            // Si l'utilisateur a cliqué sur OK
            document.getElementById("winner").innerText = name + " remporte cette édition de Mister HEIG-VD 2023 !"
            document.getElementById(name).style='background-image : url("https://media.tenor.com/fasarUEeTfMAAAAM/flash-rainbow.gif"); color:white;';
            hasVoted = true;
        }
    }


}