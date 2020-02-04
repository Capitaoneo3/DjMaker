var obj_C, obj_Db, obj_D, obj_Eb, obj_E, 
obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B;
var tecla = (ekey) => document.querySelector("." + ekey + "-key");
var     obj_C = obj_Db = obj_D = obj_Eb = obj_E = obj_F
 = obj_Gb = obj_G = obj_Ab = obj_A = obj_Bb = obj_B =
 new Tone.FMSynth({
    "modulationIndex": 12.22,
    "envelope": {
        "attack": 0.01,
        "decay": 0.2
    },
    "modulation": {
        "type": "square"
    },
    "modulationEnvelope": {
        "attack": 0.2,
        "decay": 0.01
    }
}).toMaster();


var tomCtrl = () => {
    return document.getElementById('tomCtrl').value;
};
var tomCtrlMais1 = () => {
    return parseInt(document.getElementById('tomCtrl').value) + 1;
};


var setVolume = () => {
    ( obj_C, obj_Db, obj_D, obj_Eb, obj_E,
         obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B
        ).set("volume", document.getElementById('VolPianoControl').value)
};

var tomCtrl = () => {
    return document.getElementById('tomCtrl').value;
};
var tomCtrlMais1 = () => {
    return parseInt(document.getElementById('tomCtrl').value) + 1;
};

var setpartialCount = () => {
    ( obj_C, obj_Db, obj_D, obj_Eb, obj_E, obj_F,
         obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B
        ).set({
        oscillator: {
            partialCont: document.getElementById('partialCont').value,
        }
    })
}; 




//bind the interface

document.querySelector("tone-fm-synth").bind( obj_C, obj_Db,obj_D, obj_Eb, obj_E, 
    obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B
    );


    document.addEventListener("keydown", e => {
        //  O objeto " e " possui a propriedade key para dizer qual tecla foi pressionada
       
        
       
        switch (e.key) {
            case 'A': case "a":
                obj_C.triggerAttack("C"+tomCtrl()+"");
                tecla('C4').classList.add("active");
                break
            case "w": case "W":
                obj_Db.triggerAttack("C#"+tomCtrl()+"");
                tecla('Db4').classList.add("active");
                break
            case "s": case "S":
                obj_D.triggerAttack("D"+tomCtrl()+"");
                tecla("D4").classList.add("active");
                break
            case "e": case "E":
                obj_Eb.triggerAttack("D#"+tomCtrl()+"");
                tecla("Eb4").classList.add("active");
                break
            case "d": case "D":
                obj_E.triggerAttack("E"+tomCtrl()+"");
                tecla("E4").classList.add("active");
                break
            case "f": case "F":
                obj_F.triggerAttack("F"+tomCtrl()+"");
                tecla("F4").classList.add("active");
                break
            case "t": case "T":
                obj_Gb.triggerAttack("F#"+tomCtrl()+"");
                tecla("Gb4").classList.add("active");
                break
            case "g": case "G":
                obj_G.triggerAttack("G"+tomCtrl()+"");
                tecla("G4").classList.add("active");
                break
            case "y": case "Y":
                obj_Ab.triggerAttack("G#"+tomCtrl()+"");
                tecla("Ab4").classList.add("active");
                break
            case "h": case "H":
                obj_A.triggerAttack("A"+tomCtrl()+"");
                tecla("A4").classList.add("active");
                break
            case "u": case "U":
                obj_Bb.triggerAttack("A#"+tomCtrl()+"");
                tecla("Bb4").classList.add("active");
                break
            case "j": case "J":
                obj_B.triggerAttack("B"+tomCtrl()+"");
                tecla("B4").classList.add("active");
                break
            case "k": case "K":
                obj_C.triggerAttack("C"+tomCtrlMais1()+"");
                tecla("C5").classList.add("active");
                break
            case "o": case "O":
                obj_Db.triggerAttack("C#"+tomCtrlMais1()+"");
                tecla("Db5").classList.add("active");
                break
            case "l": case "L":
                obj_D.triggerAttack("D"+tomCtrlMais1()+"");
                tecla("D5").classList.add("active");
                break
            case "p": case "P":
                obj_Eb.triggerAttack("D#"+tomCtrlMais1()+"");
                tecla("Eb5").classList.add("active");
                break
            case "ç": case "Ç":
                obj_Eb.triggerAttack("E"+tomCtrlMais1()+"");
                tecla("E5").classList.add("active");
                break
        }
    
    });
    //parar o fat respectivo
    document.addEventListener("keyup", e => {
        switch (e.key) {
            case "a": case "A":
                obj_C.triggerRelease(["C"+tomCtrl()+""]);
                tecla("C4").classList.remove("active");
                break
           
    
        }
    
    });
    (obj_C, obj_Db, obj_D, obj_Eb, obj_E, obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B).connect(dest);
    //precisa ser conectado ao destino para poder ser gravado. tudo aqui já deve estar definido antes.
    /*           ............ TECLADO.....................      TECLADO      .....................    TECLADO       ..........................    .                  TECLADO                   TECLADO        */
    
    
    