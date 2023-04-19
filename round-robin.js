function roundRobin(processes, quantum) {
  let remainingTime = [...processes].map(process => process.executionTime);
  let currentTime = 0;
  let queue = [];
  let turnaroundTimes = Array(processes.length).fill(0);

  for (let i = 0; i < processes.length; i++) {
    queue.push(i);
    console.log(`Processo ${i} adicionado na fila`);
  }
  
  while (remainingTime.some(time => time > 0)) {
    const currentProcess = queue.shift();
    const executeTime = Math.min(quantum, remainingTime[currentProcess]);
    remainingTime[currentProcess] -= executeTime;
    currentTime += executeTime;
    console.log(`Processo ${currentProcess} executado por ${executeTime} unidades de tempo`);

    if (remainingTime[currentProcess] === 0) {
      turnaroundTimes[currentProcess] = currentTime - processes[currentProcess].arrivalTime;
      console.log(`Processo ${currentProcess} finalizado`);
    } else {
      queue.push(currentProcess);
      console.log(`Processo ${currentProcess} adicionado no fim da fila`);
    }

    if (queue.length === 0) {
      currentTime = processes[currentProcess].arrivalTime;
    }
  }
}

// Exemplo de uso
const processes = [
  { arrivalTime: 0, executionTime: 8 },
  { arrivalTime: 1, executionTime: 6 },
  { arrivalTime: 2, executionTime: 4 },
  { arrivalTime: 3, executionTime: 2 }
];
const quantum = 3;

roundRobin(processes, quantum);
