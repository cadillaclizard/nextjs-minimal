export function getDataSlow(...args: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Hello from server!', args: args });
    }, 2000);
  });
}
