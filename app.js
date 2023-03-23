class Num {

    guessTheNumber(rNum_) {
        try {
            let stNum = 0;
            let fNum = 100;

            for (let i = 0; i < fNum; i++) {
                let iNum = prompt(`Введите число от ${stNum} до ${fNum}`
                );
                if (iNum === null) {
                    alert('Вы не угадали');
                    break;
                }

                if (iNum == rNum_) {
                    alert("Вы угадали!");
                    break;
                } else if (iNum > rNum_) {
                    if (fNum > iNum) {
                        fNum = iNum;
                    }

                    alert(
                        `Вы ввели число ${iNum} и это слишком большое значение. Введите число от ${stNum} до ${fNum}`
                    );
                    continue;
                } else if (iNum < rNum_) {
                    if (stNum < iNum) {
                        stNum = iNum;
                    }
                    alert(
                        `Вы ввели число ${iNum} и это слишком маленькое значение. Введите число от ${stNum} до ${fNum}`
                    );
                    continue;
                }
            }
        } catch (er) {
            return er.message;
        }
    }

}

let rNum = Math.round(Math.random() * 100);
const num = new Num();
num.guessTheNumber(rNum);