export default function animate(querySelector, className, options = {}) {
    const {
        delay = 0,
        stagger = 0,
        randomise = false,
        reverse = false
    } = options;

    const elements = Array.from(document.querySelectorAll(querySelector));
    
    const indices = randomise ?
        elements.map((_, i) => i).sort(() => Math.random() - 0.5) : 
        elements.map((_, i) => reverse ? elements.length - 1 - i : i);
    
    indices.forEach((originalIndex, sequenceIndex) => {
        setTimeout(() => {
            elements[originalIndex].classList.toggle(className);
        }, delay + (sequenceIndex * stagger));
    });
}