document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('div');
    
    newComment.innerHTML = `
        <p><strong>${name}</strong> says:</p>
        <p>${comment}</p>
    `;
    
    commentSection.appendChild(newComment);
    
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});


