function removeTransition(e) {
        // if (e.propertyName !== 'transform') return;
        const key = document.querySelector(`div[data-key="${e.key}"]`);
        key.classList.remove('playing');
        console.log(key)
      }
function playe(e){
    const audio=document.querySelector(`audio[data-key="${e.key}"]`)
    const key=document.querySelector(`div[data-key="${e.key}"]`)
    console.log(audio)
    if(!audio) return 
    audio.currentTime=0
    audio.play()
    key.classList.add('playing')}
    

document.addEventListener('keyup',removeTransition)
document.addEventListener('keydown', playe)
    