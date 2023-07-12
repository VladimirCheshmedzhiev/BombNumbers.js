function bombNumbers(sequence, number) {
    let specialNumber = number[0];
    let power = number[1];
  
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === specialNumber) {
        let leftIndex = Math.max(i - power, 0);
        let rightIndex = Math.min(i + power, sequence.length - 1);
        let elementsToRemove = rightIndex - leftIndex + 1;
  
        sequence.splice(leftIndex, elementsToRemove);
        i = leftIndex - 1; // Update i to the previous index after splice
      }
    }
  
    let sum = sequence.reduce((acc, num) => acc + num, 0);
    console.log(sum);
  }
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]) // 12
bombNumbers([1, 4, 4, 2, 8, 9,1],[9, 3]) //5
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]) //6
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]) //4
