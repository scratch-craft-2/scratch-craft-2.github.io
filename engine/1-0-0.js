    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_blank');
    });
    
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});
