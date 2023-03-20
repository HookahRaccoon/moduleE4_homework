function ElectricTools(pwc, onwire, wireless, sumPwc){
    this.name = 'name',
        this.pwc = pwc,
        this.onwire = true
    this.wireless = true
}
ElectricTools.prototype.switch = function(pwc){
    console.log(`Power consumption is ${pwc} watts`)
}

function WlessLamp(name, wireless, pwc, onwire){
    this.wireless = true
    this.name = 'lamp'
    this.onwire = false
    this.pwc = 50
}

WlessLamp.prototype = new ElectricTools()

function Comp(name, onwire, pwc, wireless){
    this.onwire = true
    this.name = 'comp'
    this.wireless = false
    this.pwc = 350
}

Comp.prototype = new ElectricTools()

const lamp = new WlessLamp('lamp', 50);
const comp = new Comp('comp', 350);

res = comp.pwc + lamp.pwc;

const sumPwc = res

console.log(comp, lamp)
console.log(`Total power consumption if both device is \'ON'\ going be ${sumPwc} watts`)

