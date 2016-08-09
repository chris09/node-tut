/**
 * Created by chris on 2016/8/9.
 */
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        this.life -= 1;
        targetPlayer.life += 1;
        console.log(this.name + " give 1 life to " + targetPlayer.name);
    };
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

// You can add functions to all objects
User.prototype.uppercut = function (targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer);
};

Wendy.uppercut(Bucky);
console.log("Bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

User.prototype.magic = 60;
console.log("Bucky's magic:" + Bucky.magic);
console.log("Wendy's magic:" + Wendy.magic);




