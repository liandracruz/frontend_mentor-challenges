const questions = document.querySelectorAll('.question');


questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('img');

        questions.forEach(item => {
            if(item !== question) {
                const otherAnswer = item.nextElementSibling;
                otherAnswer.classList.remove('active');

                const otherIcon = item.querySelector('img');
                otherIcon.src = 'assets/images/icon-plus.svg';
            }

            const otherAnswer = item.nextElementSibling;
            const otherIcon = item.querySelector('img');

            otherAnswer.classList.remove('active');
            otherIcon.src = 'assets/images/icon-plus.svg';
        })
        answer.classList.toggle('active');

        if(answer.classList.contains('active')) {
            icon.src = 'assets/images/icon-minus.svg';
        } else {
            icon.src = 'assets/images/icon-plus.svg';
        }
    })
});
