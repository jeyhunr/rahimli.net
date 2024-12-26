import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  codeExampes = `
  function bubbleSort<T>(array: T[]): T[] {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap array[j] and array[j+1]
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function selectionSort<T>(array: T[]): T[] {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap array[i] and array[minIndex]
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

function insertionSort<T>(array: T[]): T[] {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

// Example Usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort([...numbers])); // Spread operator to avoid mutating original array
console.log("Selection Sort:", selectionSort([...numbers]));
console.log("Insertion Sort:", insertionSort([...numbers]));`;
}
