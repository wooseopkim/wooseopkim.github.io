export default function dedent(s: TemplateStringsArray) {
  return s.join().trim().replace(/^\s+/, '');
}
