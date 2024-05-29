const createDataOnTable = (data, index) => {
  return `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${data.name}</td>
      <td class="text-center">${data.burstTime}</td>
      <td class="text-center">${data.waitingTime}</td>
    </tr>
  `;    
}

export default createDataOnTable;
