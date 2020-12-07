interface Item {
  id: string;
  children?: Array<Item>;
}

const data = [
  { id: "0" },
  {
    id: "1",
    children: [
      {
        id: "1.1",
        children: [
          {
            id: "1.1.1",
            children: [
              {
                id: "1.1.1.1",
                children: [
                  { id: "1.1.1.1.1" },
                  { id: "1.1.1.1.2" },
                  { id: "1.1.1.1.3" },
                ],
              },
              { id: "1.1.1.2" },
              { id: "1.1.1.3" },
            ],
          },
          { id: "1.1.2" },
          { id: "1.1.3" },
        ],
      },
      { id: "1.2" },
      { id: "1.3" },
    ],
  },
  { id: "2" },
  { id: "3" },
];

/*
function find(arr: Array<Item>, id: string) {
  const findItem = arr.find((item) => {
    return item.id === id;
  });

  if (findItem) {
    return findItem;
  }

  for (var i = 0; i < arr.length; i++) {
    const { children } = arr[i];
    if (children) {
      return find(children, id);
    }
  }
}
// */

const search = (
  arr: Array<Item>,
  searchItemId: string,
  item: Item
): boolean => {
  return arr.some((data, index) => {
    let cloneItem = { ...data };
    let { children = [], id: cloneItemId } = cloneItem;

    console.log("haru", cloneItemId);
    if (cloneItemId === searchItemId) {
      console.log("haru", "find!!", cloneItemId, searchItemId, index);
      children.push(item);

      arr[index] = { id: searchItemId, children };
      console.log("haru", "dd", arr[index], { searchItemId, children });
      return true;
    }

    if (data.children) {
      return search(data.children, searchItemId, item);
    }
  });
};

function add(data: Array<Item>, targetId: string, item: Item): Array<Item> {
  const cloneData = [...data];

  search(cloneData, targetId, item);

  return cloneData;
}

//console.log(JSON.stringify(find(data, "1.1.1.1")))
/* console.log(JSON.stringify(add(data, "1.1.1.1", {id: "1.1.1.1.99" } ))) */
console.log("haru", add(data, "1.2", { id: "1.1.1.1.99" }));
