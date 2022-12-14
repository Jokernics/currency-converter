export enum View {
  main = 'main',
  dictionary = 'dictionary',
  sprint = 'sprint',
  audioCall = 'audioCall',
  statistics = 'statistics',
}

export type groupType = 0 | 1 | 2 | 3 | 4 | 5;

export type pageType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29;

export enum textBookView {
  textBook = 'textbook',
  dictionary = 'dictionary',
}

export type learnedPagesType = {
  0: number[];
  1: number[];
  2: number[];
  3: number[];
  4: number[];
  5: number[];
};
