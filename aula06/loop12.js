let vas = 0;
let fla = 0;
let flu = 0;
let bot = 0;
let time;
for(let i = 0; i,10; i++){
    time = prompt('qual seu time?');
    switch (time){
        case 'vas':
            vas++; break;
        case 'fla': 
            fla++; break; 
        case 'flu':
            flu++; break;
        case 'bot':
            bot++; break;
        defaut:
            out++;          
    }                    
}
document.write('torcedores do vasco' + vas + '<br>');
document.write('torcedores do fla' + fla + '<br>');
document.write('torcedores do flu' + flu + '<br>');
document.write('torcedores do bot' + bot + '<br>');
document.write('Outros torcedores' + out + '<br>');
