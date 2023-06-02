// https://github.com/casieber/zalgo-js/blob/1b132ccf5a2b3760a21af88bcbc810719915b8b2/src/index.ts#L6-L8
const up = [
  768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782,
  783, 784, 785, 786, 787, 788, 789, 794, 795, 829, 830, 831, 832, 833, 834,
  835, 836, 838, 842, 843, 844, 848, 849, 850, 855, 856, 859, 861, 862, 864,
  865, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879,
];
const middle = [820, 821, 822, 823, 824];
const down = [
  790, 791, 792, 793, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806,
  807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 825, 826,
  827, 828, 837, 839, 840, 841, 845, 846, 851, 852, 853, 854, 857, 858, 860,
  863, 866,
];

export default function zalgo(
  s: string,
  intensity: number,
  wrapper = (x: string) => x
): string {
  const characters = [...s];
  const p = intensity / characters.length;
  return characters
    .filter(Boolean)
    .map((c) => {
      const x = random(up, p);
      const y = random(middle, p);
      const z = random(down, p);
      return `${c}${wrapper(x + y + z)}`;
    })
    .join('');
}

function random(candidates: number[], probability: number): string {
  const count = Math.random() < probability ? 1 : 0;
  return (
    Array(count)
      .fill(null)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .map(() => candidates[Math.floor(Math.random() * candidates.length)]!)
      .filter(Boolean)
      .map((x) => String.fromCharCode(x))
      .join('')
  );
}
