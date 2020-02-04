console.clear();
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();//INPORTANTE O TONE CONTEXTO DEVE INICIAR ANTES DE QUALQUER SCRIPT QUE EMITA SOM PARA PODER GRAVAR.
});/*políticas de privacidade googler, 
ação do usuário necessária para começar a reproduzir o elemento "áudio abaixo"*/


const audio = document.getElementById('finalR');
const actx = Tone.context;
const dest = actx.createMediaStreamDestination(); //API AUDIO WEB 
const recorder = new MediaRecorder(dest.stream);


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



