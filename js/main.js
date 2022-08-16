document.addEventListener("DOMContentLoaded", () =>{
    /* Skills */
    var basic = document.getElementById('attack');
    var fireball = document.getElementById('fireball')
    var pHealthPoints = document.getElementById('p-health-points');
    var eHealthPoints = document.getElementById('e-health-points')
    var pHpText = document.getElementById('player-health-text');
    var eHpText = document.getElementById('enemy-health-text');

    var player = document.querySelector('.player');
    
    var eHp = 100;
    var pHp = 100;
    pHpText.textContent = `${pHp}/100`;
    eHpText.textContent =`${eHp}/100`;
    function damage(max, min){
        var damage = Math.floor(Math.random() * (max - min) + min);
        return damage;
    }
    function basicAttack(){
        eHp -= damage(10, 1)
        if(eHp < 0){
            eHp = 0;
        }
        eHealthPoints.style.width =eHp + "%" ;
        eHpText.textContent = `${eHp}/100`;

        /* Animação de ataque */
        player.style.animation = '';
        setTimeout(function(){
            player.style.animation = 'attack .5s linear'
        }, 5)
    }
    function fireBall(){
        eHp -= damage(50, 10)
        if(eHp < 0){
            eHp = 0;
        }
        eHealthPoints.style.width =eHp + "%" ;
        eHpText.textContent = `${eHp}/100`;

        /* Animação de ataque */
        player.style.animation = '';
        setTimeout(function(){
            player.style.animation = 'attack .5s linear'
        }, 5)
    }
    function enemyDead(){
        if(eHp == 0){
            return true
        }else{
            return false
        }
    }
    basic.addEventListener("click", () =>{
        if(enemyDead()){
            alert("O inimigo está morto!")
        }else{
            basicAttack();
        }
    })
    fireball.addEventListener("click", () =>{
        if(enemyDead()){
            alert("O inimigo está morto!");
        }else{
            fireBall();
        }
    })
})
