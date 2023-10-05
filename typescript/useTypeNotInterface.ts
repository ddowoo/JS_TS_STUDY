// 기본 사용법

type UserProps = {
  name: string;
  age: number;
};

type AdminProps = UserProps & {
  role: string;
};

interface userProps {
  name: string;
  age: number;
}

interface adminProps extends userProps {
  role: string;
}

// -----------------------------------------
// interface가 아닌 type을 쓰자!!!! (생각해보기)

// 이유 1
// interface는 객체만 사용할 수 있음

type UserText = string;
// interface userText  string; => 불가

// -----------------------------------------
// 이유 2
// union types은 type에서만 가능하다
type Address = string | string[];
// interface address string | string[] => 불가
const address: Address = "DaeJeon";

type UserPropsTwo = {
  name: string;
  age: number;
  createAt: Date;
};

// Omit을 사용시
type GuestProps = Omit<UserProps, "createAt" | "age">;
// interface도 구현은 가능 하나 코드가 type에 비해 지저분함
interface guestProps extends Omit<UserProps, "name" | "age"> {}

// -----------------------------------------
// 이유3
// tuples선언이 더 쉽다

type AddressTwo = [number, string];
interface addressTwo extends Array<number | string> {
  0: number;
  1: string;
}
const addressTwo: addressTwo = [0, "1"];

// -----------------------------------------
// 이유4
// 타입의 추출 가능
const project = {
  title: "Project Name",
  specification: {
    areaSize: 100,
    rooms: 3,
  },
};

type Specification = (typeof project)["specification"];

// -----------------------------------------
// 이유5
// interface는 재선언이 가능함
interface user {
  name: string;
  age: number;
}

interface user {
  role: string;
}

// const user: User = { name: "", age: 1, role: "" };

type User = {
  name: string;
  age: number;
};

// type은 재 선언시 에러
// type User = {
//   role: string;
// };
type User2 = User & {
  role: string;
};

// -----------------------------------------
// 이유6
// class에서도 사용 가능함 (interface도 가능)

interface IUser {
  name: string;
  age: number;
}

type TUser = {
  name: string;
  age: number;
};

class CUser implements TUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// https://www.youtube.com/watch?v=Idf0zh9f3qQ
