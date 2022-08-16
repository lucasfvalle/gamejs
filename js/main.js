document.addEventListener("DOMContentLoaded", () =>{
    var clickAttack = document.getElementById('attack');
    var hpEnemyValue = document.getElementById('enemy-value');
    var hpPlayerValue = document.getElementById('player-value');
    var pHealthPoints = document.getElementById('p-health-points');
    var eHealthPoints = document.getElementById('e-health-points')
    var pHpText = document.getElementById('player-health-text');
    var eHpText = document.getElementById('enemy-health-text');

    var player = document.querySelector('.player');
    
    var eHp = 100;
    var pHp = 100;
    pHpText.textContent = `${pHp}/100`;
    eHpText.textContent =`${eHp}/100`
    function basicAttack(){
        var attack = Math.random() * (10 - 1) + 1;
        eHp -= Math.floor(attack);
        if(eHp < 0){
            eHp = 0;
        }
        eHealthPoints.style.width =eHp + "%" ;
        eHpText.textContent = `${eHp}/100`;
        player.style.animation = '';
        setTimeout(function(){
            player.style.animation = 'attack .5s linear'
        }, 5)
    }
    clickAttack.addEventListener("click", () =>{
        basicAttack();
    })
    
    document.addEventListener("change", () =>{
        playerHp = 10;
    })
})
