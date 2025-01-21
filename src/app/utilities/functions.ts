export function getRandomUUID() {
  try {
    return  window.crypto.randomUUID()
  } catch {
    return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  }


}
