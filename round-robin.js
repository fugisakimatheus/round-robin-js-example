function roundRobin(processes, quantum) {
  let remainingTime = [...processes].map(process => process.executionTime);
  let queue = [];

  for (let i = 0; i < processes.length; i++) {
    queue.push(i);
    console.log(`Processo ${i} adicionado na fila`);
  }
  
  while (remainingTime.some(time => time > 0)) {
    const currentProcess = queue.shift();
    const executeTime = Math.min(quantum, remainingTime[currentProcess]);
    remainingTime[currentProcess] -= executeTime;
    console.log(`Processo ${currentProcess} executado por ${executeTime} unidades de tempo`);

    if (remainingTime[currentProcess] === 0) {
      console.log(`Processo ${currentProcess} finalizado`);
    } else {
      queue.push(currentProcess);
      console.log(`Processo ${currentProcess} adicionado no fim da fila`);
    }
  }
}

// Exemplo de uso
const processes = [
  { arrivalTime: 3, executionTime: 2 },
  { arrivalTime: 0, executionTime: 8 },
  { arrivalTime: 2, executionTime: 4 },
  { arrivalTime: 1, executionTime: 6 },
];
const quantum = 3;

roundRobin(processes, quantum);
