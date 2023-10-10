let hasVoted = false;

function vote(name) {
    if (hasVoted) {
        alert("VOUS AVEZ DÉJÀ VOTÉ ! TRICHEUR ! NOUS AVONS DES YEUX PARTOUT, ET NOUS NE TOLÉRERONS PAS VOTRE FRAUDE !");
        return;
    }

    const voteUser = confirm(`Souhaitez-vous voter pour ${name} ?`);
    
    if (voteUser) {
        // Si l'utilisateur a cliqué sur OK
        const winnerElement = document.getElementById("winner");
        winnerElement.innerText = `${name} remporte cette édition de Mister HEIG-VD 2023 !`;

        const nameElement = document.getElementById(name);
        nameElement.style.backgroundImage = 'url("https://media.tenor.com/fasarUEeTfMAAAAM/flash-rainbow.gif")';
        nameElement.style.color = 'white';

        hasVoted = true;
    }
}
