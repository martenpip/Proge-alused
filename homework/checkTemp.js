function checkTemp (temp) {
    console.log("Temp on "+temp)
    
    if (temp <20) {
        console.log("liiga külm")
        return -1
    }
    else if (temp <= 40) {
        comsole.log("paras temperatuur")
        return 0;
    }
    else {
        console.log("liiga kuum")
        return 1
    }
}
