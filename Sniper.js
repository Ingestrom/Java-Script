const correctAnswers = ['C', 'C', 'A', 'D', 'F', 'A', 'A', 'C', 'A', 'G', 'B', 'A', 'D', 'C', 'E', 'D', 'B', 'A', 'C', 'A'];
const result = document.querySelector('.result');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value,
    form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value, form.q16.value
    , form.q17.value, form.q18.value, form.q19.value, form.q20.value]
    // Checking answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 4;
        };
    });
    scrollTo(0, 0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        };
    }, 30);
});