console.clear();
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});/*políticas de privacidade googler, 
ação do usuário necessária para começar a reproduzir o elemento "áudio abaixo"*/


const tecla = (ekey) => document.querySelector("." + ekey + "-key");
var inputVolu1 = document.getElementById('VolPianoControl');
const audio = document.getElementById('finalR');

const actx = Tone.context;
const dest = actx.createMediaStreamDestination(); //API AUDIO WEB 
const recorder = new MediaRecorder(dest.stream);

var polyC, polyDb, polyD, polyEb, polyE, polyF, polyGb, polyG, polyAb, polyA, polyBb, polyB;
var Teclados = [Tone.FMSynth, Tone.AMSynth, Tone.DuoSynth]; //o PolySynth só aceita instrumentos polifonicos;
var indice = 0;
var SintetizadorPoly = (i) => {
    polyC = polyDb = polyD = polyEb = polyE = polyF = polyGb = polyG = polyAb = polyA = polyBb = polyB =
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
console.log(polyC.get());
function nextTeclado() {
    ++indice
    if (Teclados.length - 1 >= indice) {

        SintetizadorPoly(indice);
    } else if (Teclados.length - 1 <= indice) { //RETORNA O INDICE A ZERO
        indice = 0;

        SintetizadorPoly(indice);
    }
}

var setVolume = () => {
    (polyC, polyDb, polyD,
        polyEb, polyE, polyF,
        polyGb, polyG, polyAb,
        polyA, polyBb, polyB).set("volume", inputVolu1.value)
};
setInterval(setVolume, 500);
var tomCtrl=()=>{
       return document.getElementById('tomCtrl').value;
    };
    var tomCtrlMais1=()=>{
        return parseInt (document.getElementById('tomCtrl').value)+1;
     };
var setOciladorTipo = (valor) => {
    (polyC, polyDb, polyD,
        polyEb, polyE, polyF,
        polyGb, polyG, polyAb,
        polyA, polyBb, polyB).set({
            oscillator: {
                type: valor,
            }
        })
};
var setpartialCount = () => {
    (polyC, polyDb, polyD,
        polyEb, polyE, polyF,
        polyGb, polyG, polyAb,
        polyA, polyBb, polyB).set({
            oscillator: {
                partialCount: document.getElementById('partialCont').value,
            }
        })
};setInterval(setpartialCount,500);

//eventos de mouse    ///////////////////EVENTOS DE MOUSE///////////////////////////EVENTOS DE MOUSE 

//.........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////////////////////////////////
// eventos do teclado
document.addEventListener("keydown", e => {
    //  O objeto " e " possui a propriedade key para dizer qual tecla foi pressionada
   
    
   
    switch (e.key) {
        case 'A': case "a":
            polyC.triggerAttack(["C"+tomCtrl()+""]);
            tecla('C4').classList.add("active");
            break
        case "w": case "W":
            polyDb.triggerAttack(["C#"+tomCtrl()+""]);
            tecla('Db4').classList.add("active");
            break
        case "s": case "S":
            polyD.triggerAttack(["D"+tomCtrl()+""]);
            tecla("D4").classList.add("active");
            break
        case "e": case "E":
            polyEb.triggerAttack(["D#"+tomCtrl()+""]);
            tecla("Eb4").classList.add("active");
            break
        case "d": case "D":
            polyE.triggerAttack(["E"+tomCtrl()+""]);
            tecla("E4").classList.add("active");
            break
        case "f": case "F":
            polyF.triggerAttack(["F"+tomCtrl()+""]);
            tecla("F4").classList.add("active");
            break
        case "t": case "T":
            polyGb.triggerAttack(["F#"+tomCtrl()+""]);
            tecla("Gb4").classList.add("active");
            break
        case "g": case "G":
            polyG.triggerAttack(["G"+tomCtrl()+""]);
            tecla("G4").classList.add("active");
            break
        case "y": case "Y":
            polyAb.triggerAttack(["G#"+tomCtrl()+""]);
            tecla("Ab4").classList.add("active");
            break
        case "h": case "H":
            polyA.triggerAttack(["A"+tomCtrl()+""]);
            tecla("A4").classList.add("active");
            break
        case "u": case "U":
            polyBb.triggerAttack(["A#"+tomCtrl()+""]);
            tecla("Bb4").classList.add("active");
            break
        case "j": case "J":
            polyB.triggerAttack(["B"+tomCtrl()+""]);
            tecla("B4").classList.add("active");
            break
        case "k": case "K":
            polyC.triggerAttack(["C"+tomCtrlMais1()+""]);
            tecla("C5").classList.add("active");
            break
        case "o": case "O":
            polyDb.triggerAttack(["C#"+tomCtrlMais1()+""]);
            tecla("Db5").classList.add("active");
            break
        case "l": case "L":
            polyD.triggerAttack(["D"+tomCtrlMais1()+""]);
            tecla("D5").classList.add("active");
            break
        case "p": case "P":
            polyEb.triggerAttack(["D#"+tomCtrlMais1()+""]);
            tecla("Eb5").classList.add("active");
            break
        case "ç": case "Ç":
            polyEb.triggerAttack(["E"+tomCtrlMais1()+""]);
            tecla("E5").classList.add("active");
            break
    }

});
//parar o fat respectivo
document.addEventListener("keyup", e => {
    switch (e.key) {
        case "a": case "A":
            polyC.triggerRelease(["C"+tomCtrl()+""]);
            tecla("C4").classList.remove("active");
            break
        case "w": case "W":
            polyDb.triggerRelease(["C#"+tomCtrl()+""]);
            tecla("Db4").classList.remove("active");
            break
        case "s": case "S":
            polyD.triggerRelease(["D"+tomCtrl()+""]);
            tecla("D4").classList.remove("active");
            break
        case "e": case "E":
            polyEb.triggerRelease(["D#"+tomCtrl()+""]);
            tecla("Eb4").classList.remove("active");
            break
        case "d": case "D":
            polyE.triggerRelease(["E"+tomCtrl()+""]);
            tecla("E4").classList.remove("active");
            break
        case "f": case "F":
            polyF.triggerRelease(["F"+tomCtrl()+""]);
            tecla("F4").classList.remove("active");
            break
        case "t": case "T":
            polyGb.triggerRelease(["F#"+tomCtrl()+""]);
            tecla("Gb4").classList.remove("active");
            break
        case "g": case "G":
            polyG.triggerRelease(["G"+tomCtrl()+""]);
            tecla("G4").classList.remove("active");
            break
        case "y": case "Y":
            polyAb.triggerRelease(["G#"+tomCtrl()+""]);
            tecla("Ab4").classList.remove("active");
            break
        case "h": case "H":
            polyA.triggerRelease(["A"+tomCtrl()+""]);
            tecla("A4").classList.remove("active");
            break
        case "u": case "U":
            polyBb.triggerRelease(["A#"+tomCtrl()+""]);
            tecla("Bb4").classList.remove("active");
            break
        case "j": case "J":
            polyB.triggerRelease(["B"+tomCtrl()+""]);
            tecla("B4").classList.remove("active");
            break
        case "k": case "K":
            polyC.triggerRelease(["C"+tomCtrlMais1()+""]);
            tecla("C5").classList.remove("active");
            break
        case "o": case "O":
            polyDb.triggerRelease(["C#"+tomCtrlMais1()+""]);
            tecla("Db5").classList.remove("active");
            break
        case "l": case "L":
            polyD.triggerRelease(["D"+tomCtrlMais1()+""]);
            tecla("D5").classList.remove("active");
            break
        case "p": case "P":
            polyEb.triggerRelease(["D#"+tomCtrlMais1()+""]);
            tecla("Eb5").classList.remove("active");
            break
        case "ç": case "Ç":

            polyE.triggerRelease(["E"+tomCtrlMais1()+""]);
            tecla("E5").classList.remove("active");
            break

    }

});
(polyC, polyDb, polyD, polyEb, polyE, polyF, polyGb, polyG, polyAb, polyA, polyBb, polyB).connect(dest);
//precisa ser conectado ao destino para poder ser gravado. tudo aqui já deve estar definido antes.
/*           ............ TECLADO.....................      TECLADO      .....................    TECLADO       ..........................    .                  TECLADO                   TECLADO        */





Tone.Transport.scheduleRepeat(time => { //Time é uma chamada para o tempo atual do Tone,Funciona de maneira global.Na verdade essa função nem é nessesária aqui, só veio no tutorial de gravar com o áudio web
    /* evento repetido a cada semi colchea. 4n=semi colchea, 8n=colchea. Conta o tempo com essas medidas. 1m= primeiro compasso. */

    /*como está gravando a gente não pode escutar esse evento, mas se aqui existisse uma demosnstração como 
  "step-sequencer" notariamos a duração de cada nota de acordo com esse último parametro do Tone.Transport.scheduleRepeat */


    $("#TecladoPR").mousedown(function () {
        recorder.start();
    });

    $("#TecladoSR").mousedown(function () {

        recorder.stop();
        Tone.Transport.stop();
    });

}, '4n');
/*....................GRAVAR   GRAVAR......................GRAVAR*/
var chunks = []; //lugar para armarzenar os dados de áudio

//CAPTIRANDO DE EVT.WINDOW OS SOMS
recorder.ondataavailable = evt => chunks.push(evt.data); //O método push () adiciona novos itens ao final de uma matriz e retorna o novo comprimento.

//SALVAMDO O NOVO DADO TIPO AUDIO
recorder.onstop = evt => {
    var blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    //Um Blobobjeto representa um arquivo de dados brutos imutáveis; eles podem ser lidos como texto ou dados binários ou convertidos em um ReadableStream para que seus métodos possam ser usados ​​para processar os dados. Os blobs podem representar dados que não estão necessariamente em um formato nativo de JavaScript.
    audio.src = URL.createObjectURL(blob);
};
var resetar = () => {
    chunks = [];
    audio.src = "";
};




Tone.Transport.start(); //Transporte para cronometrar eventos musicais.

////////////////////////////////////////////////////////



