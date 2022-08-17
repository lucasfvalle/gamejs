document.addEventListener("DOMContentLoaded", () =>{
    /* Monstros */
    var monsters = [
        {
            name: 'Fish Monster',
            avatar: './sources/monster/fish-monster.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        },
        {
            name: 'Goblin',
            avatar: './sources/monster/fish-monster.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        },
        {
            name: 'Fish Monster',
            avatar: './sources/monster/fish-monster.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        }
    ]
    
    /* Health Points*/
    var pHealthPoints = document.getElementById('p-health-points');
    var eHealthPoints = document.getElementById('e-health-points')
    var pHpText = document.getElementById('player-health-text');
    var eHpText = document.getElementById('enemy-health-text');

    /* Enemy */
    var eAvatar = document.getElementById('e-avatar');
    var eName = document.getElementById('e-name');

    eAvatar.setAttribute("src", monsters[0].avatar)
    eName.textContent = monsters[0].name;
    
    /* Mana Points */
    var pManaPoints = document.getElementById('p-mana-points');
    var pMpText = document.getElementById('player-mana-text');
    /* Skills */
    var basic = document.getElementById('attack');
    var fireball = document.getElementById('fireball');
    

    var player = document.querySelector('.player');
    
    var eHp = 100;
    var pHp = 100;
    var pMp = 100;

    pMpText.textContent = `${pMp}/100`;
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
        let manaCoust = 25;
        pMp -= manaCoust;

        if(eHp < 0){
            eHp = 0;
        }
        eHealthPoints.style.width = eHp + "%";
        eHpText.textContent = `${eHp}/100`;
        
        /* Mana */
        if(pMp < manaCoust){
            alert('Mana insuficiente!');
        }else{
            pManaPoints.style.width = pMp + "%";
            pMpText.textContent = `${pMp}/100`;
        }
       

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
