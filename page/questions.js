Page({
  onInit(params) {
    const paramsObj = JSON.parse(params);
    const { id, type } = paramsObj;
    console.log(id === "0"); // true
    console.log(type === "normal"); // true
    console.log("you are on questions");
  },
});
