export function setItem(key: string, data: any) {
  //   console.log("@src/utilities/storage.ts :: setItem :: data = ", data);
  localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key: string) {
  const data = localStorage.getItem(key);
  //   console.log(
  //     "@src/utilities/storage.ts :: getItem :: parse data = ",
  //     data && JSON.parse(data)
  //   );
  return !!data ? JSON.parse(data) : null;
}
