export interface Character {
  id: number;
  name: string;
}

export const loadAll = (): Promise<Character[]> => new Promise((resolve) => {
  setTimeout(() => {
    const chars: Character[] = [1,2,3].map<Character>(x => ({
      id: x,
      name: `Char ${x}`
    }));

    resolve(chars);
  }, 1000);
});
