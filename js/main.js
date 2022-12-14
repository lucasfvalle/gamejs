document.addEventListener("DOMContentLoaded", () =>{
    let Player = {
        name: '',
        hp: 100,
        mp: 100,
        maxHp: 100,
        level: 1,
        currentExp: 0,
        maxExp: 200,
        skill: '',
    }
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
            avatar: './sources/monster/goblin.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        },
        {
            name: 'Golem',
            avatar: './sources/monster/golem.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        },
        {
            name: 'Slime',
            avatar: './sources/monster/slime.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        }, {
            name: 'Troll',
            avatar: './sources/monster/troll.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        },
        {
            name: 'Vampire',
            avatar: './sources/monster/vampire.png',
            type: 'Beast',
            level: 1,
            exp: 100,
            max_atk: 25,
            min_atk: 5,
            status: 1
        }
    ]

    /* Stage */
    var gameStage = document.querySelector('.game-container');
    var initialStage = document.querySelector('.container');
    gameStage.style.display = "none";

    
    var startGame = document.getElementById('start');
    startGame.addEventListener("click", async function(event){
        event.preventDefault();
        gameStage.style.display = "flex";
        initialStage.style.display = "none";
    })
    /* Health Points*/
    var pName = document.getElementById('player-name');
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
    

    var playerCard = document.querySelector('.player');
    
    var eHp = 100;
    var pHp = 100;
    var pMp = 100;

    

    /* Card Player */
    function levelUp(currentExp, maxExp, level){
        if(currentExp == maxExp){
            currentExp = 0;
            maxExp += 100;
            level++;
            console.log(`Level: ${level}`);
        }
    }
   
     /* Expbar */
     var expBarPoints = document.getElementById('exp-bar-points');
     var expbarText = document.getElementById('exp-bar-text');
    /* Exp value*/
    /* Exp display */
     expBarPoints.style.width = Player.currentExp + "%";
     expbarText.textContent = `Experi??ncia: ${Player.currentExp}/${Player.maxExp}`;
    
    pMpText.textContent = `${Player.mp}/100`;
    pHpText.textContent = `${Player.hp}/100`;
    eHpText.textContent =`${eHp}/100`;

    
    
    function damage(max, min){
        var damage = Math.floor(Math.random() * (max - min) + min);
        return damage;
    }

    function battleLog(attack, dmg){
        var logList = document.getElementById('log-list');
        var logListItem = document.createElement('li');
        var battleSpan = document.createElement('span');
        
        
        battleSpan.textContent = `Batalha: Jogador usou ${attack}: ${dmg} de dano.`;
        
        
        logListItem.appendChild(battleSpan);
        /* Insere o novo registro como primeiro elemento. (insertAdjacentElement  = 'afterbegin') */
        logList.insertAdjacentElement('afterbegin',logListItem);
    }

    var dmgValue = 0;
    var attack_name ='';

    function basicAttack(){
        dmgValue = damage(10,1);
        attack_name = 'Ataque b??sico';
        eHp -= dmgValue;
        if(eHp < 0){
            eHp = 0;
        }
        eHealthPoints.style.width =eHp + "%" ;
        eHpText.textContent = `${eHp}/100`;
        
        /* Log */
        battleLog(attack_name, dmgValue);
        
        /* Anima????o de ataque */
        playerCard.style.animation = '';
        setTimeout(function(){
            playerCard.style.animation = 'attack .5s linear'
        }, 5)
    }
    function fireBall(){
        attack_name = "Bola de fogo";
        dmgValue = damage(50,10);
        eHp -= dmgValue;
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
       
        /* Log */
        battleLog(attack_name, dmgValue)

        /* Anima????o de ataque */
        playerCard.style.animation = '';
        setTimeout(function(){
            playerCard.style.animation = 'attack .5s linear'
        }, 5)
    }
    function enemyDead(){
        if(eHp == 0){
            console.log("Exp ganha: " + monsters[0].exp)
            Player.currentExp += monsters[0].exp;
            expbarText.textContent = `Experi??ncia: ${Player.currentExp}/${Player.maxExp}`;
            var expPer = Player.currentExp / Player.maxExp *100;
            if(expBarPoints.style.width != "100%"){
                expBarPoints.style.width = expPer + "%"
            }
            levelUp(Player.currentExp, Player.maxExp, Player.level);
            return true
        }else{
            return false
        }
    }

    basic.addEventListener("click", () =>{
        if(enemyDead()){
            alert("O inimigo est?? morto!")
        }else{
            basicAttack();
        }
    })
    fireball.addEventListener("click", () =>{
        if(enemyDead()){
            alert("O inimigo est?? morto!");
            
        }else{
            fireBall();
        }
    })
})
