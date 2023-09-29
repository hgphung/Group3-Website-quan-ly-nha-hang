export interface LoginDto {
  username: string;
  password: string;
}

export const listUser: LoginDto[] = [
  { username: "abc", password: "123" },
  { username: "abcd", password: "1234" },
  { username: "abcde", password: "12345" },
  { username: "phung", password: "12345" }
];
