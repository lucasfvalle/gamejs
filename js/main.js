document.addEventListener("DOMContentLoaded", () =>{
    var clickAttack = document.getElementById('attack');
    var hpEnemyValue = document.getElementById('enemy-value');
    var hpPlayerValue = document.getElementById('player-value');
    var healthPoints = document.getElementById('health-points');
    var healthPointsText = document.getElementById('player-health-text');
    
    var hpEnemy = 100;
    healthPointsText.textContent = `${hpEnemy}/100`;
    clickAttack.addEventListener("click", () =>{
        var attack = Math.random() * (10 - 1) + 1;
        hpEnemy -= Math.floor(attack);
        if(hpEnemy < 0){
            hpEnemy = 0;
        }
        healthPoints.style.width =hpEnemy + "%" ;
        healthPointsText.textContent = `${hpEnemy}/100`;
        
    })
    
    document.addEventListener("change", () =>{
        playerHp = 10;
    })
})
