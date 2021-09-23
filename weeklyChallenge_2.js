function solution(scores) {
    var answer = '';

    for (let i = 0; i < scores.length; i++) {
        let myScore = scores[i][i];
        console.log(`myScore: ${myScore}`);
        let min = 100;
        let max = 0;
        let sum = 0;
        let count = scores.length;
        for (let j = 0; j < scores.length; j++) {
            console.log(`${i}, ${j}: ${scores[j][i]}`);
            min = Math.min(min, scores[j][i]);
            max = Math.max(max, scores[j][i]);
            sum += scores[j][i];
        }

        console.log(`min: ${min}, max: ${max}`);
        let minCount = 0;
        let maxCount = 0;

        for (let j = 0; j < scores.length; j++) {
            if (scores[j][i] == min) {
                minCount++;
            }
            if (scores[j][i] == max) {
                maxCount++;
            }
        }

        if ((minCount == 1 && myScore <= min) || (maxCount == 1 && myScore >= max)) {
            console.log('내 점수 삭제');
            
            sum -= myScore;
            count--;
        }

        let average = sum / count;
        console.log(`average: ${average}`);

        if (average >= 90) {
            answer = answer + 'A';
        } else if (average < 90 && average >= 80) {
            answer = answer + 'B';
        } else if (average < 80 && average >= 70) {
            answer = answer + 'C';
        } else if (average < 70 && average >= 50) {
            answer = answer + 'D';
        } else if (average < 50) {
            answer = answer + 'F';
        }
    }

    return answer;
}

const result = solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]);
console.log(`result : ${result}`);