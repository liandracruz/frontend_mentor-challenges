const questions = document.querySelectorAll('.question');


questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('img');

        answer.classList.toggle('active');

        if(answer.classList.contains('active')) {
            icon.src = 'assets/images/icon-minus.svg';
        } else {
            icon.src = 'assets/images/icon-plus.svg';
        }
    })
});
