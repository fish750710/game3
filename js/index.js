$(function() {    
    const gameSenceCenter = {};
    let width = window.innerWidth;
    let height = window.innerHeight;
    let platforms = arrobj = [];
    let player = style = {};    
    let lastTime = xx = first = applicationsNum = 0;
    let btn_left = btn_right = text = "";
    let move_left = move_right = line300status = false;
    Com.browserRedirect() ? (gameSenceCenter.pc = false, style = {font: 'bold 50px Arial', color:'#fff100'}) : (gameSenceCenter.pc = true, style = {font: 'bold 30px Arial', color:'#fff100'}); 
    $(".badge").on("click", function(){        
        let top = $("#gameStage").offset().top;         
        Com.browserRedirect() ?  window.scrollTo(0, top-20) :  window.scrollTo(0, top-150);  
    })  
    $(".popBg3").show(); 
    gameSenceCenter.boot = {
            key: 'boot',
            preload() {                  
                this.load.baseURL = './img/';
                if(gameSenceCenter.pc){
                    this.load.image('bg_init', "bg_init.jpg");
                    this.load.image('bg_init_b',  "bg_init_b.png");
                    this.load.image('bg_red',  "bg_red.png");
                    this.load.spritesheet('player', "player.png", { frameWidth: 54, frameHeight: 70});
                    this.load.spritesheet('conveyorRight',  "conveyor_right.png",{ frameWidth: 114, frameHeight: 40});
                    this.load.spritesheet('conveyorLeft',  "conveyor_left.png",{ frameWidth: 114, frameHeight: 40});
                    this.load.image('normal',  "normal.png");
                    this.load.image('wall',  "wall.svg");
                    this.load.image('ceiling',  "ceiling.png");
                    this.load.image('topwall',  "topwall.png");
                    this.load.image('bg',  "bg.jpg");
                    this.load.image('icon3',  "icon-3.png");
                    this.load.image('heart',  "heart.png");
                    this.load.spritesheet('ico_start_m',  "ico_start.png", { frameWidth: 146, frameHeight: 123});
                    this.load.spritesheet('reward100',  "reward168.png", { frameWidth: 370, frameHeight: 50});
                    this.load.spritesheet('reward200',  "reward300.png", { frameWidth: 370, frameHeight: 50}); 
                    // this.load.spritesheet('penguin',  "penguin.png", { frameWidth: 283, frameHeight: 54});
                    this.load.image('winRight',  "winRight.png");
                    this.load.image('winLeft',  "winLeft.png");
                    this.load.image('btn_serive_m',  "btn_serive.png");
                    this.load.spritesheet('num',  "num.png", { frameWidth: 49, frameHeight: 73});
                    this.load.image('gameWin',  "gameWin.jpg");
                    // this.load.image('text_win_m',  "text_win.png");
                }else{
                    this.load.image('bg_init',  "bg_init_m.jpg");
                    this.load.image('bg_init_b',  "bg_init_b_m.png");
                    this.load.image('bg_red',  "bg_red_m.png");
                    this.load.spritesheet('player', "player_m.png", { frameWidth: 110, frameHeight: 142});
                    this.load.spritesheet('conveyorRight',  "conveyor_right_m.png",{ frameWidth: 228, frameHeight: 80});
                    this.load.spritesheet('conveyorLeft',  "conveyor_left_m.png",{ frameWidth: 228, frameHeight: 80});
                    this.load.image('normal',  "normal_m.png");
                    this.load.image('wall',  "wall_m.png");
                    this.load.image('ceiling',  "ceiling_m.png");
                    this.load.image('topwall',  "topwall_m.png");
                    this.load.image('bg',  "bg_m.jpg");
                    this.load.image('icon3',  "icon-3_m.png");
                    this.load.image('heart',  "heart_m.png");
                    this.load.spritesheet('ico_start_m',  "ico_start_m.png", { frameWidth: 292, frameHeight: 265});
                    this.load.spritesheet('reward100',  "reward168_m.png", { frameWidth: 740, frameHeight: 100});
                    this.load.spritesheet('reward200',  "reward300_m.png", { frameWidth: 740, frameHeight: 100});
                    this.load.spritesheet('btn_m',  "btn_m.png", { frameWidth: 150, frameHeight: 150});                       
                    // this.load.spritesheet('penguin',  "penguin_m.png", { frameWidth: 356, frameHeight: 108});                              
                    this.load.image('winRight',  "winRight_m.png");
                    this.load.image('winLeft',  "winLeft_m.png");
                    this.load.image('btn_serive_m',  "btn_serive_m.png");
                    this.load.spritesheet('num',  "num_m.png", { frameWidth: 100, frameHeight: 150});
                    this.load.image('return',  "return.png");
                    this.load.image('gameWin',  "gameWin_m.jpg");
                    // this.load.image('text_win_m',  "text_win_m.png");
                }
                this.load.image('firework1',  "firework1.png");
                this.load.image('firework2',  "firework2.png");
                this.load.image('textLoser_m',  "text_loser_m.png");
                this.load.image('line300',  "line.png");
            const percentText = this.make.text({
                x: this.game.config.width / 2,
                y: this.game.config.height / 2 - 5,
                text: '0%',
                style: {
                font: '18px monospace',
                fill: '#ffffff'
                }
            }).setOrigin(0.5, 0.5);
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
            });        
            this.load.on('complete', function () {
                percentText.destroy();
            });
            },
            create() {  
                gameSenceCenter.pc ? (startCenterX = 330, startCenterY = 200) : (startCenterX = 230, startCenterY = 400);
                this.add.image(0,0,'bg_init').setOrigin(0,0).setDepth(0);
                this.add.image(0,0,'bg_init_b').setOrigin(0,0).setDepth(1);
                icoStart = this.add.image(startCenterX, startCenterY, 'ico_start_m', 1).setOrigin(0, 0).setInteractive({ useHandCursor: true }).on('pointerdown', ()=>{
                    this.scene.start('init');
                });
                icoStart.setDepth(2);
                icoStart.visible = false;
                $(".gameStart").on('click', function(){
                    game.scene.start('init');
                    $(".gameStart").hide();
                })
                // this.scene.start('init'); //test                
            },
            update() {                    
                if(!$(".activity-btn1").is(":visible") && !$(".gameStart").is(":visible")){   
                    icoStart.visible = true;                         
                }
            }
    }

    gameSenceCenter.init = {
        key: 'init',
        create() {
            $(".popBg3").hide();
            this.add.image(0,0,'bg_init').setOrigin(0,0);
            platforms = arrobj= [];
            player = {};    
            lastTime = first = applicationsNum = 0;
            btn_left = btn_right = text = time = "";
            move_left = move_right = line300status = false;   
            num = 2
            let top = $("#gameStage").offset().top; 
            Com.browserRedirect() ?  window.scrollTo(0, top-20) :  window.scrollTo(0, top-150);       
        },        
        update() {            
            if(num >= 0){
                gameSenceCenter.pc ? (numCenterX = 370, numCenterY = 250) : (numCenterX = 300, numCenterY = 500);
                if(game.loop.time > lastTime + 1000){        
                    lastTime = game.loop.time  
                    time.visible = false;                  
                    if(num == 0){                    
                        setTimeout(() => {                            
                            this.scene.start('play'); 
                        }, 1000);
                    }                
                    time = this.add.sprite(numCenterX, numCenterY, 'num', num).setOrigin(0, 0);              
                    num -= 1                
                }            
            }
        },
    }

    gameSenceCenter.play = {
        key: 'play',
        create() {               
            this.bg = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'bg').setOrigin(0, 0);
            platforms = this.physics.add.staticGroup();
            if(gameSenceCenter.pc){ 
                this.add.image(340, 0, 'heart').setOrigin(0, 0);        
                this.add.text(410, 10, '5 /', style).setShadow(0,0,'#000',8,true);
                text = this.add.text(450, 10, '', style).setShadow(0,0,'#000',8,true);
                platforms.create(200, 0,'wall').setOrigin(0, 0);
                platforms.create(600, 0,'wall').setOrigin(0, 0);
                this.add.image(215, 50,'ceiling').setOrigin(0, 0);
                this.add.image(0, 50,'topwall').setOrigin(0, 0);
                this.add.image(200, 50, 'icon3').setOrigin(0, 0);
                this.add.image(550, 50, 'icon3').setOrigin(0, 0);
                player = this.physics.add.sprite(400, 240, 'player');
                player.body.gravity.y = 250;
            }else{             
                this.add.image(250, 20, 'heart').setOrigin(0, 0);        
                this.add.text(350, 30, '5 /', style).setShadow(0,0,'#000',8,true);
                text = this.add.text(420, 30, '', style).setShadow(0,0,'#000',8,true); 
                platforms.create(-30, 150,'wall').setOrigin(0, 0);
                platforms.create(740, 150,'wall').setOrigin(0, 0);
                this.add.image(10, 120,'ceiling').setOrigin(0, 0);
                this.add.image(0, 120,'topwall').setOrigin(0, 0);
                this.add.image(0, 120, 'icon3').setOrigin(0, 0);
                this.add.image(650, 120, 'icon3').setOrigin(0, 0);
                player = this.physics.add.sprite(370, 300, 'player');
                player.body.gravity.y = 250;
                this.add.image(10, 30, 'return').setOrigin(0, 0).setInteractive().on('pointerup',function(){
                    // console.log("返回")
                    game.scene.stop('play');
                    window.scrollTo(0, 0);
                    $(".gameStart").show().css('background-position', '0% 33%');
                    $(".popBg3").show();
                    game.scene.start('boot');
                });
                btn_left = this.add.image(80, 950, 'btn_m', 0).setOrigin(0, 0).setInteractive();
                btn_right = this.add.image(520, 950, 'btn_m', 2).setOrigin(0, 0).setInteractive();                
                btn_left.on('pointerdown', ()=>{
                    btn_right.setFrame(2);  
                    btn_left.setFrame(1);
                    move_right = move_right ? false : "";  
                    move_left = true;                   
                    btn_left.on('pointerup', () =>{
                        btn_left.setFrame(0);
                        move_right = false; 
                        move_left = false;   
                    },this)  
                    btn_left.on('pointerout', () =>{
                        btn_left.setFrame(0);
                        move_right = false; 
                        move_left = false;   
                    },this) 
                },this); 
                              
                btn_right.on('pointerdown', ()=>{
                    btn_left.setFrame(0);
                    btn_right.setFrame(3);
                    move_left = move_left ? false : "";
                    move_right = true;           
                    btn_right.on('pointerup', ()=>{
                        btn_right.setFrame(2);  
                        move_right = false; 
                        move_left = false;            
                    },this)  
                    btn_right.on('pointerout', ()=>{
                        btn_right.setFrame(2);  
                        move_right = false; 
                        move_left = false;            
                    },this)                                 
                },this);                               
                btn_left.setDepth(10);
                btn_right.setDepth(10);
            }  
            // player.setBounce(0); //回彈 會穿透
            // player.setCollideWorldBounds(true); //觸底
            // 血條
            player.life = 5;
            // 觸碰物件
            player.touchOn = undefined;
            // 無敵狀態
            player.unbeatableTime = 0;
            //採到階梯數量 
            player.touchNum = 0;
            // 金幣
            player.money = 0;
            this.anims.create({
                key: 'left',
                frames:this.anims.generateFrameNumbers('player',{ start: 0, end: 3}),
                frameRate: 6,
                repeat: -1
            });
            this.anims.create({
                key: 'turn',
                frames: [ { key: 'player', frame: 8 } ],
                frameRate: 6
            });
            this.anims.create({
                key: 'right',
                frames:this.anims.generateFrameNumbers('player',{ start: 4, end: 7}),
                frameRate: 6,
                repeat: -1
            });            
            this.anims.create({
                key: 'ConveyorLeft',
                frames: this.anims.generateFrameNumbers('conveyorLeft',{ start: 0, end: 1}),
                frameRate: 6,
                repeat: -1
            });
            this.anims.create({
                key: 'ConveyorRight',
                frames: this.anims.generateFrameNumbers('conveyorRight',{ start: 0, end: 1}),
                frameRate: 6,
                repeat: -1
            });
            this.anims.create({
                key: 'Reward100',
                frames: this.anims.generateFrameNumbers('reward100',{ start: 0, end: 1}),
                frameRate: 6,
                repeat: -1
            });
            this.anims.create({
                key: 'Reward200',
                frames: this.anims.generateFrameNumbers('reward200',{ start: 0, end: 1}),
                frameRate: 6,
                repeat: -1
            });
            this.anims.create({
                key: 'landing',
                frames: this.anims.generateFrameNumbers('player',{ start: 9, end: 10}),
                frameRate: 6,
                repeat: -1
            });
            this.cursors = this.input.keyboard.createCursorKeys();
            // 物理特性
            this.physics.add.collider(player, platforms);
        },
        update() {
            let bgHeigh = triggerTime = recycleHegiht = speed = centerPosition = 0;   
            gameSenceCenter.pc ? (bgHeigh = 3400, triggerTime = 1150, recycleHegiht = 70, speed = 2, centerPosition = 400) : 
                                (bgHeigh = 3400, triggerTime = 2000, recycleHegiht = 180, speed = 2, centerPosition = 380);                       
            if(this.bg.tilePositionY <= bgHeigh){        
                this.bg.tilePositionY += 1;    
                for(let key in arrobj){                    
                    arrobj[key].y -= speed;
                    if(arrobj[key].y < recycleHegiht){
                        arrobj[key].destroy();
                        arrobj.splice(key, 1);
                    }                    
                } 
                if(game.loop.time > lastTime + triggerTime){  
                    this.physics.world.checkCollision.none = false;      
                    lastTime = game.loop.time;
                    let x = Math.random();                    
                    let y
                    if(gameSenceCenter.pc){
                        x = x > 0.8 ? x * 200 + 320 : x * 200 + 280;                       
                        y = 600;                    
                    }else{
                        x = x > 0.8 ? x * width + 220 : x * width + 120;                     
                        let spacing = x - xx
                        xx = x;
                        if(spacing <= 80 && spacing >=0 || spacing >= -80 && spacing <=0){                            
                            // console.log("太近", x)
                            (x >= width + 220) ? (x = x - 100) : (x <= width + 120) ? (x = x + 100) : (x = x - 100);
                            xx = x;                           
                        }                        
                        y = 1200;  //*1.6
                    }     
                    let rand = Math.random() * 100;
                    if(player.touchNum >= 5 && first == 0){ //5
                        // console.log("報名第一關")
                        first = 1
                        cl = this.physics.add.sprite(centerPosition, y, 'reward100');                    
                    }else if(player.touchNum >= 10 && first == 1){
                        // console.log("報名第二關")
                        first = 2
                        cl = this.physics.add.sprite(centerPosition, y, 'reward200');
                    }else if (rand < 15){               
                        cl = this.physics.add.sprite(x, y, 'conveyorLeft');
                        cl.anims.play('ConveyorLeft', true)
                        // // 影格動畫(動畫名稱,影格,每秒針數, 重複)
                        // platform.animations.add('scroll', [0, 1], 10, true);
                        // platform.play('scroll');
                    }else if (rand < 30){
                        cl = this.physics.add.sprite(x, y, 'conveyorRight');
                        cl.anims.play('ConveyorRight', true)
                    }else{
                        cl = this.physics.add.sprite(x, y, 'normal');       
                    }                   
                    cl.body.immovable = true; //不可移動
                    arrobj.push(cl);
                    this.physics.add.collider(player, cl , effect);                    
                }
            }else{      
                arrobj.forEach((boj)=>{
                    boj.destroy();            
                }) 
                if(gameSenceCenter.pc){                    
                    cl = this.physics.add.sprite(100, 550, 'line300').setOrigin(0, 0);
                }else{                    
                    cl = this.physics.add.sprite(0, 1150, 'line300').setOrigin(0, 0);
                }                
                cl.body.immovable = true; //不可移動
                arrobj.push(cl);
                this.physics.add.collider(player, cl , effect);            
            }
              
            if(gameSenceCenter.pc){            
                if (this.cursors.left.isDown){
                    player.setVelocityX(-200);
                    // player.body.velocity.x = -300;
                    player.anims.play('left', true);  
                }else if (this.cursors.right.isDown){
                    player.setVelocityX(200);
                    player.anims.play('right', true);
                }else{
                    player.setVelocityX(0);
                    player.anims.play('turn');                
                }   
                touchCeiling = 80;  
                overHeight = 650;       
            }else{
                // 移動端Buttom    
                if(move_left){                                      
                    player.setVelocityX(-250);
                    player.anims.play('left', true);                    
                }else if(move_right){    
                                 
                    player.setVelocityX(250);
                    player.anims.play('right', true);
                }else if(!move_left || !move_right){
                    player.setVelocityX(0);
                    player.anims.play('turn');
                }
                touchCeiling = 200;
                overHeight = 1400;
            }            
            text.setText(player.life);
            // money.setText(player.money)            
            if(player.body.y < touchCeiling){       
                if(game.loop.time > player.unbeatableTime){
                    // 無敵狀態
                    player.unbeatableTime = game.loop.time + 2000;       
                    player.life -= 1;
                    const red = this.add.image(0,0,'bg_red').setOrigin(0,0); 
                    setTimeout(() => {
                        red.visible = false;
                    }, 50);
                }                
            }
            if(player.body.y > overHeight){
                arrobj.forEach((boj)=>{
                    boj.destroy();            
                })                
                arrobj = [];      
                this.scene.start('gameover');                
            }else if(player.life <=0){
                arrobj.forEach((boj)=>{
                    boj.destroy();            
                })
                arrobj = [];                
                player.anims.play('landing', true)                 
                setTimeout(() => {
                    this.scene.start('gameover')
                }, 3000);
            }                   
            line300status && this.scene.pause('play') && this.scene.start('win');    
        },
    }

    gameSenceCenter.gameover = {
        key: 'gameover',
        create(){
            this.add.image(0,0,'bg_init').setOrigin(0,0);
            this.add.image(0,0,'bg_init_b').setOrigin(0,0); 
            gameSenceCenter.pc ? 
            (textLoserCenter = 200, startCenterX = 330, startCenterY = 200, btnServiceY = 350) : 
            (textLoserCenter = 500, startCenterX = 230, startCenterY = 400, btnServiceY = 700);
            textLoser_m = this.add.image(125, textLoserCenter,'textLoser_m').setOrigin(0,0); 
            setTimeout(() => {
                textLoser_m.visible = false;
                const again = this.add.image(startCenterX, startCenterY, 'ico_start_m', 2).setOrigin(0, 0).setInteractive({ useHandCursor: true }); 
                again.on('pointerdown', function(){
                    this.scene.pause('play');
                    this.scene.start('init');
                }, this) 
                const btnService = this.add.image(startCenterX, btnServiceY, 'btn_serive_m').setOrigin(0, 0).setInteractive({ useHandCursor: true });
                btnService.on('pointerdown', function(){             
                    customerService();
                }, this)                  
            }, 2000);        
        },
        update(){}
    }

    gameSenceCenter.win = {
        key: 'win',
        create(){           
            player.visible = false;
            gameSenceCenter.pc ? 
            (playerCenterX = 400, playerCenterY = 450, penguin1CenterX = 0, penguin2CenterX = 800, penguinCenterY = 600, btnServiceY = 350, textwinX = 250,textwinY = 500, firework1X=170, fireworkY=300, firework2X=620) : 
            (playerCenterX = 380, playerCenterY = 980, penguin1CenterX = 0, penguin2CenterX = 750, penguinCenterY = 1100, btnServiceY = 700, textwinX = 120, textwinY = height, firework1X=200, fireworkY=400, firework2X=500);
            this.add.image(0, 0,'gameWin').setOrigin(0,0);
            player2 = this.physics.add.sprite(playerCenterX, playerCenterY, 'player');
            this.anims.create({
                key: 'dancing',
                frames:this.anims.generateFrameNumbers('player',{ start: 12, end: 13}),
                frameRate: 3,
                repeat: -1
            });        
            penguin1 = this.physics.add.sprite(penguin1CenterX, penguinCenterY, 'winLeft').setOrigin(0,1);
            penguin2 = this.physics.add.sprite(penguin2CenterX, penguinCenterY, 'winRight').setOrigin(1,1);
            firework1 = this.physics.add.sprite(firework1X, fireworkY, 'firework1');
            firework2 = this.physics.add.sprite(firework2X, fireworkY, 'firework2');
            firework1.visible = false;
            firework2.visible = false;
            penguin1.rotation = -1.5; 
            penguin2.rotation = 1.5; 
            // this.anims.create({
            //     key: 'penguin_dancing',
            //     frames:this.anims.generateFrameNumbers('penguin',{ start: 0, end: 1}),
            //     frameRate: 3,
            //     repeat: -1
            // });
            // penguin1.anims.play('penguin_dancing', true);
            // penguin2.anims.play('penguin_dancing', true);
            player2.anims.play('dancing', true);
            player2.setDepth(1);
            // penguin1.setDepth(1);
            // penguin2.setDepth(1);
            btn_left.visible = false;
            btn_right.visible = false;            
            // textwin = this.add.image(textwinX, textwinY,'text_win_m').setOrigin(0,0);
            // textwin.setDepth(0);
            setTimeout(() => {                
                if($("#gameSuccessBox").data("total") == 0){
                    this.scene.start('gamereset');
                }else{                                  
                    $("#gameSuccessBox, .popMsg").show();
                    setTimeout(()=>{
                        $(".msgInfo").show();
                    }, 500);
                    setTimeout(() => {
                        $("#gameSuccessBox, .popMsg").hide();                    
                        this.scene.start('gamereset');
                    }, 5000);
                }                         
            }, 5000);
        },
        update(){     
            gameSenceCenter.pc ? 
            (textwinY = 100, text300X = 220, text300Y = 300, btnServiceY = 350, penguin1X = 185, penguin2X = 615, firework1Y = 200, firework2Y = 150) :
            (textwinY = 250, text300X = 200, text300Y = 600, penguin1X = 190, penguin2X = 560, firework1Y = 200, firework2Y = 150); 
            // textwin.y >= textwinY ? textwin.y -=3 : "";
            // penguin1.x <= penguin1X ? penguin1.x +=2 : "";
            // penguin2.x >= penguin2X ? penguin2.x -=2 : "";
            penguin1.rotation <= 0 ? penguin1.rotation += 0.02 : "";
            penguin2.rotation >= 0 ? penguin2.rotation -= 0.02 : "";
            setTimeout(()=>{
                firework1.visible=true
                firework1.y >= firework1Y ? firework1.y -=8 : firework1.visible=false;
                setTimeout(()=>{
                    firework2.visible=true
                    firework2.y >= firework2Y ? firework2.y -=10 : firework2.visible=false;
                },800);
            },1200);                        
            // if(textwin.y >= textwinY){
            //     textwin.y -=3            
            // }else{
            //     // text300 = this.add.image(text300X, text300Y,'text300_m').setOrigin(0,0);  
            // }
            // if(penguin1.x <= penguin1X){
            //     penguin1.x +=2
            // }        
            // if(penguin2.x >= penguin2X){
            //     penguin2.x -=2
            // }            
        }
    }

    gameSenceCenter.gamereset = {
    key: 'gamereset',
    create(){
        gameSenceCenter.pc ? (startCenterX = 330, startCenterY = 200, btnServiceY = 350):(startCenterX = 230, startCenterY = 400, btnServiceY = 700);
        this.add.image(0,0,'bg_init').setOrigin(0,0);
        this.add.image(0,0,'bg_init_b').setOrigin(0,0);   
        const again = this.add.image(startCenterX, startCenterY, 'ico_start_m', 3).setOrigin(0, 0).setInteractive({ useHandCursor: true }); 
        again.on('pointerdown', function(){
            this.scene.start('init');
        }, this) 
        const btnService = this.add.image(startCenterX, btnServiceY, 'btn_serive_m').setOrigin(0, 0).setInteractive({ useHandCursor: true });
        btnService.on('pointerdown', function(){              
            customerService();
        }, this) 
    },
    update(){
    }
}

    // 檢查採到哪個
    function effect (player, platform) { 
        gameSenceCenter.pc ? (x = 2, rangeLeft = 220, rangeRight = 530) : (x = 2, rangeLeft = 0, rangeRight = 590);    
        platform.texture.key == 'conveyorLeft' && player.body.x > rangeLeft ? player.body.x -= x : "";
        platform.texture.key == 'conveyorRight' && player.body.x < rangeRight ? player.body.x += x : "";
        platform.texture.key == 'normal' && player.touchOn !== platform ? 
            (player.touchNum +=1 ,player.touchOn = platform, 
                player.life < 5 ? player.life += 1 : "") :"";
        // if(platform.texture.key == 'trampoline'){
        //     // 往上彈
        //     player.body.velocity.y = -350;
        //     platform.play('jump')
        // }
        // if(platform.texture.key == 'nails'){        
        //     // 無重複碰
        //     if(player.touchOn !== platform){
        //         player.life -= 1;
        //         // 碰到釘子
        //         player.touchOn = platform;
        //     }
        // }
        // if(platform.texture.key == 'fake'){
        //     if(player.touchOn !== platform){
        //         // 延遲下墜
        //         setTimeout(function(){
        //             platform.play('turn');
        //             // 取消向下碰撞(假樓梯)
        //             platform.body.checkCollision.up = false;                
        //         }, 200)      
        //         player.touchOn = platform;      
        //     }
        // }    
        // 報名階梯
        if(platform.texture.key == 'reward100' || platform.texture.key == 'reward200' && first){
            platform.texture.key == 'reward100' && applicationsNum == 0 ? (applicationsNum = 1, platform.setFrame(1)) : 
            platform.texture.key == 'reward200' && applicationsNum == 1 ? (applicationsNum = 2, platform.setFrame(1)) : "";
            if(player.touchOn !== platform){             
                // 延遲下墜
                setTimeout(function(){                
                    // 取消向下碰撞(假樓梯)
                    platform.body.checkCollision.none = true;              
                }, 400)      
                player.touchOn = platform;  
            }
        }
        platform.texture.key == 'line300' ? (applicationsNum = 3, line300status = true): "";
    }
    Com.browserRedirect() ? (gameWidth = 750, gameHeight = 1200) : (gameWidth = 800, gameHeight = 600);
    const config = {
        type: Phaser.CANVAS, //AUTO android 在webGL會黑屏
        width: gameWidth,
        height: gameHeight,
        backgroundColor: '#888',
        parent: 'gameStage',   
        // scale: {
        //     // mode: Phaser.Scale.NONE   ,
        //     // autoCenter: Phaser.Scale.CENTER_BOTH,      
        // },
        physics: {
            default: 'arcade',
            arcade: {
                // gravity: { y: 500 },
                debug: false
            }
        },
        scene: [ gameSenceCenter.boot,gameSenceCenter.init, gameSenceCenter.play, gameSenceCenter.gameover, gameSenceCenter.win, gameSenceCenter.gamereset ],
        callbacks: {
            postBoot: function (game) {
                game.canvas.style.width = '100%';
                game.canvas.style.height = '100%';
            }
        }
    };
    const game = new Phaser.Game(config);
});