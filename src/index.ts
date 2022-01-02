/**
 * Use TypeScript.
 */

function helloWorld<T>(a: T): T {
  return a;
}

console.log(helloWorld<number>(5));
