class Elusolend {
    isDead = false;
}

// abstract
class Loom extends Elusolend {
    nimi;
    hääl;
    häälitse() {
        console.log(this.hääl)
    }
}

class Koer extends Loom {
    hääl = "woof";
}

class Kass extends Loom {
    hääl = "meow";
}

let koer = new Koer();
koer.häälitse()

let a = new Kass();
a.häälitse()

let loom = new Loom();
loom.häälitse()