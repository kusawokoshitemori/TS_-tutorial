export const test = () => {
  //   const name: string = "Mike";
  //   console.log(name);
  // };
  // const add = (a: number, b: number): number => {
  //   return a + b;
  // };
  // const sum = add(5, 10);
  // console.log(sum);
  // const reverse = (array: string[], hasTom?: boolean): string[] => {
  //   const newArray: string[] = [];
  //   for (let i = array.length - 1; i >= 0; i--) {
  //     newArray.push(array[i]);
  //   }
  //   if (hasTom) newArray.push("Tom");
  //   return newArray;
  // };
  // const reverseArray = reverse(["a", "b", "c"], true);
  // console.log(reverseArray);
  interface UserProps {
    userId: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
  }

  //元あるやつを追加することができる
  interface AdminUser extends UserProps {
    role: string;
  }

  const User = {
    userId: 1,
    name: "Mike",
    age: 25,
    email: "Mike@gmail.com",
    isActive: true,
  };

  const createAccount = (accountInfo: UserProps) => {};
  createAccount({
    userId: 2,
    name: "Mike",
    age: 25,
    email: "Mike@gmail.com",
    isActive: true,
  });
};
