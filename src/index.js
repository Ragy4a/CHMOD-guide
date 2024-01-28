'use strict'

function getLinuxRights() {
    let input = prompt("Введите цифру от 0 до 7:");

    if (input !== null) {
        let rights = Number(input);

        if (!isNaN(rights) && rights >= 0 && rights <= 7) {
            switch (rights) {
                case 0:
                    console.log(`${rights} соответствует уровню прав: ---`);
                    break;
                case 1:
                    console.log(`${rights} соответствует уровню прав: --x`);
                    break;
                case 2:
                    console.log(`${rights} соответствует уровню прав: -w-`);
                    break;
                case 3:
                    console.log(`${rights} соответствует уровню прав: -wx`);
                    break;
                case 4:
                    console.log(`${rights} соответствует уровню прав: r--`);
                    break;
                case 5:
                    console.log(`${rights} соответствует уровню прав: r-x`);
                    break;
                case 6:
                    console.log(`${rights} соответствует уровню прав: rw-`);
                    break;
                case 7:
                    console.log(`${rights} соответствует уровню прав: rwx`);
                    break;
                default:
                    console.log("Некорректный ввод.");
            }
        } else {
            console.log("Некорректный ввод. Введите цифру от 0 до 7.");
        }
    } 
}
getLinuxRights();