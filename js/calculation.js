import arrayDatas from "./resource/data.js";
import createDataOnTable from "./template/teble-template.js";

const calculation = () => {
  const formData = document.querySelector('#form-calculation');
  const container = document.querySelector('#container-body-table');
  const averageTimeDisplay = document.querySelector('#average-time');
  const turnAroundTimeDisplay = document.querySelector('#turn-around-time');

  formData.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameProcess = document.querySelector('#processName').value;
    const burstTime = parseInt(document.querySelector('#burstTime').value);

    const datas = {
      name: nameProcess,
      burstTime: burstTime
    }

    arrayDatas.push(datas);
    formData.reset();
    console.log(arrayDatas);

    let waitingTime = 0;
    let totalTime = 0;
    let totalTurnAroundTime = 0;

    
    arrayDatas.forEach((data, index) => {
      if (index > 0) {
        waitingTime += arrayDatas[index - 1].burstTime;
      }
      data.waitingTime = waitingTime;
      data.turnAroundTime = data.burstTime + data.waitingTime;
      totalTime += data.waitingTime;
      totalTurnAroundTime += data.turnAroundTime;
    });
    
    console.log(totalTime);
    const averageTime = totalTime / arrayDatas.length;
    const averageTurnAroundTime = totalTurnAroundTime / arrayDatas.length;

    averageTimeDisplay.textContent = `Average Time: ${averageTime.toFixed(2)}`;
    turnAroundTimeDisplay.textContent = `Turn Around Time: ${averageTurnAroundTime.toFixed(2)}`;

    container.innerHTML = '';
    arrayDatas.forEach((data, index) => {
      container.insertAdjacentHTML('beforeend', createDataOnTable(data, index));
    });
  });
}

export default calculation;