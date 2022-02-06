function Animation(context) {
    this.context = context;
    this.sprites = []
    this.ligado = false
}

Animation.prototype = {
    novoSprite: function(sprites) {
        this.sprites.push(sprites);
    },
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function() {
        this.ligado = false;
    },
    proximoFrame: function() {
        if (!this.ligado) return;

        this.limparTela();

        for (var i in this.sprites)
            this.sprites[i].atualizar();

        for (var i in this.sprites) 
            this.sprites[i].desenhar();

        let animation = this;
        requestAnimationFrame(function() {
            animation.proximoFrame();
        });

        
    },

    limparTela: function() {
        let ctx = this.context;
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }
}
