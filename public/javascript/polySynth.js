

var tecla = (ekey) => document.querySelector("." + ekey + "-key");
var inputVolu1 = document.getElementById('VolPianoControl');

var obj_C, obj_Db, obj_D, obj_Eb, obj_E, obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B;
var Teclados = [Tone.FMSynth, Tone.AMSynth, Tone.DuoSynth]; //o PolySynth só aceita instrumentos polifonicos;
var indice = 0;
var SintetizadorPoly = (i) => {
    obj_C = obj_Db = obj_D = obj_Eb = obj_E = obj_F = obj_Gb = obj_G = obj_Ab = obj_A = obj_Bb = obj_B =
        new Tone.PolySynth(10, Teclados[i], { //( [ polifonia = 4 ] , [ voz = Tone.Synth ] , voiceArgs )
        }).set({
            oscillator: {
                type: "sine", //colocar função para alterar o tipo Onda Senoidal (Sine Wave)(Sawtooth Wave)(Square Wave)(Triangle Wave)
                frequency: 440,
                detune: 0,
                phase: 0,
                partialCount: 10,
                volume: -5,
            },
            modulation: {
                type: "sawtooth",
                frequency: 440,
                detune: 0,
                phase: 100,
                partialCount: 5,
                volume: 4
            },
            envelope: {
                attack: 0,
                decay: 0.01,
                sustain: 1,
                release: 0.5,
                attackCurve: "linear",
                decayCurve: "exponential",
                releaseCurve: "exponential"
            },
            modulationEnvelope: {
                attack: 0.5,
                decay: 10,
                sustain: 1,
                release: 0.1,
                attackCurve: "linear",
                decayCurve: "exponential",
                releaseCurve: "exponential"
            },


        }).toMaster();
}
SintetizadorPoly(indice);
console.log(obj_C.get());
function nextTeclado() {
    ++indice
    if (Teclados.length - 1 >= indice) {

        SintetizadorPoly(indice);
    } else if (Teclados.length - 1 <= indice) { //RETORNA O INDICE A ZERO
        indice = 0;

        SintetizadorPoly(indice);
    }
}var tomCtrl=()=>{
       return document.getElementById('tomCtrl').value;
    };
    var tomCtrlMais1=()=>{
        return parseInt (document.getElementById('tomCtrl').value)+1;
     };

var setVolume = () => {
    (obj_C, obj_Db, obj_D,
        obj_Eb, obj_E, obj_F,
        obj_Gb, obj_G, obj_Ab,
        obj_A, obj_Bb, obj_B).set("volume", inputVolu1.value)
};


var setOciladorTipo = (valor) => {
    (obj_C, obj_Db, obj_D,
        obj_Eb, obj_E, obj_F,
        obj_Gb, obj_G, obj_Ab,
        obj_A, obj_Bb, obj_B).set({
            oscillator: {
                type: valor,
            }
        })
};
var setpartialCount = () => {
    (obj_C, obj_Db, obj_D,
        obj_Eb, obj_E, obj_F,
        obj_Gb, obj_G, obj_Ab,
        obj_A, obj_Bb, obj_B).set({
            oscillator: {
                partialCount: document.getElementById('partialCont').value,
            }
        })
};

//eventos de mouse    ///////////////////EVENTOS DE MOUSE///////////////////////////EVENTOS DE MOUSE 

//.........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////////////////////////////////
// eventos do teclado
document.addEventListener("keydown", e => {
    //  O objeto " e " possui a propriedade key para dizer qual tecla foi pressionada
   
    
   
    switch (e.key) {
        case 'A': case "a":
            obj_C.triggerAttack(["C"+tomCtrl()+""]);
            tecla('C4').classList.add("active");
            break
        case "w": case "W":
            obj_Db.triggerAttack(["C#"+tomCtrl()+""]);
            tecla('Db4').classList.add("active");
            break
        case "s": case "S":
            obj_D.triggerAttack(["D"+tomCtrl()+""]);
            tecla("D4").classList.add("active");
            break
        case "e": case "E":
            obj_Eb.triggerAttack(["D#"+tomCtrl()+""]);
            tecla("Eb4").classList.add("active");
            break
        case "d": case "D":
            obj_E.triggerAttack(["E"+tomCtrl()+""]);
            tecla("E4").classList.add("active");
            break
        case "f": case "F":
            obj_F.triggerAttack(["F"+tomCtrl()+""]);
            tecla("F4").classList.add("active");
            break
        case "t": case "T":
            obj_Gb.triggerAttack(["F#"+tomCtrl()+""]);
            tecla("Gb4").classList.add("active");
            break
        case "g": case "G":
            obj_G.triggerAttack(["G"+tomCtrl()+""]);
            tecla("G4").classList.add("active");
            break
        case "y": case "Y":
            obj_Ab.triggerAttack(["G#"+tomCtrl()+""]);
            tecla("Ab4").classList.add("active");
            break
        case "h": case "H":
            obj_A.triggerAttack(["A"+tomCtrl()+""]);
            tecla("A4").classList.add("active");
            break
        case "u": case "U":
            obj_Bb.triggerAttack(["A#"+tomCtrl()+""]);
            tecla("Bb4").classList.add("active");
            break
        case "j": case "J":
            obj_B.triggerAttack(["B"+tomCtrl()+""]);
            tecla("B4").classList.add("active");
            break
        case "k": case "K":
            obj_C.triggerAttack(["C"+tomCtrlMais1()+""]);
            tecla("C5").classList.add("active");
            break
        case "o": case "O":
            obj_Db.triggerAttack(["C#"+tomCtrlMais1()+""]);
            tecla("Db5").classList.add("active");
            break
        case "l": case "L":
            obj_D.triggerAttack(["D"+tomCtrlMais1()+""]);
            tecla("D5").classList.add("active");
            break
        case "p": case "P":
            obj_Eb.triggerAttack(["D#"+tomCtrlMais1()+""]);
            tecla("Eb5").classList.add("active");
            break
        case "ç": case "Ç":
            obj_Eb.triggerAttack(["E"+tomCtrlMais1()+""]);
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
        case "w": case "W":
            obj_Db.triggerRelease(["C#"+tomCtrl()+""]);
            tecla("Db4").classList.remove("active");
            break
        case "s": case "S":
            obj_D.triggerRelease(["D"+tomCtrl()+""]);
            tecla("D4").classList.remove("active");
            break
        case "e": case "E":
            obj_Eb.triggerRelease(["D#"+tomCtrl()+""]);
            tecla("Eb4").classList.remove("active");
            break
        case "d": case "D":
            obj_E.triggerRelease(["E"+tomCtrl()+""]);
            tecla("E4").classList.remove("active");
            break
        case "f": case "F":
            obj_F.triggerRelease(["F"+tomCtrl()+""]);
            tecla("F4").classList.remove("active");
            break
        case "t": case "T":
            obj_Gb.triggerRelease(["F#"+tomCtrl()+""]);
            tecla("Gb4").classList.remove("active");
            break
        case "g": case "G":
            obj_G.triggerRelease(["G"+tomCtrl()+""]);
            tecla("G4").classList.remove("active");
            break
        case "y": case "Y":
            obj_Ab.triggerRelease(["G#"+tomCtrl()+""]);
            tecla("Ab4").classList.remove("active");
            break
        case "h": case "H":
            obj_A.triggerRelease(["A"+tomCtrl()+""]);
            tecla("A4").classList.remove("active");
            break
        case "u": case "U":
            obj_Bb.triggerRelease(["A#"+tomCtrl()+""]);
            tecla("Bb4").classList.remove("active");
            break
        case "j": case "J":
            obj_B.triggerRelease(["B"+tomCtrl()+""]);
            tecla("B4").classList.remove("active");
            break
        case "k": case "K":
            obj_C.triggerRelease(["C"+tomCtrlMais1()+""]);
            tecla("C5").classList.remove("active");
            break
        case "o": case "O":
            obj_Db.triggerRelease(["C#"+tomCtrlMais1()+""]);
            tecla("Db5").classList.remove("active");
            break
        case "l": case "L":
            obj_D.triggerRelease(["D"+tomCtrlMais1()+""]);
            tecla("D5").classList.remove("active");
            break
        case "p": case "P":
            obj_Eb.triggerRelease(["D#"+tomCtrlMais1()+""]);
            tecla("Eb5").classList.remove("active");
            break
        case "ç": case "Ç":

            obj_E.triggerRelease(["E"+tomCtrlMais1()+""]);
            tecla("E5").classList.remove("active");
            break

    }

});
(obj_C, obj_Db, obj_D, obj_Eb, obj_E, obj_F, obj_Gb, obj_G, obj_Ab, obj_A, obj_Bb, obj_B).connect(dest);
//precisa ser conectado ao destino para poder ser gravado. tudo aqui já deve estar definido antes.
/*           ............ TECLADO.....................      TECLADO      .....................    TECLADO       ..........................    .                  TECLADO                   TECLADO        */


