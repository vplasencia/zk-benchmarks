export async function run(callback) {
  const t0 = performance.now();

  const result = await callback();

  const t1 = performance.now();

  return [result, t1 - t0];
}
