export default function dedent(...s: string[]) {
  return s.join().trim().replace(/^\s+/, '');
}
