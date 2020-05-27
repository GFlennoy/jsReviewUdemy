nums = [45, 60, 80, 90];
nums.forEach(function (num) {
  console.log(num);
});
myForEach(nums, function (num) {
  console.log(num);
});
// diff btw func & func()!!!
function myForEach(arr, func) {
  //loop through array
  for (i = 0; i < arr.length; i++) {
    //call func for each item
    func(arr[i]);
  }
}
colors = ["red", "orange", "yellow"];
myForEach(colors, alert);
// diff btw alert & alert()!!!
// use anonymous function: 'function(){}'
myForEach(colors, function () {
  alert("YO!");
});
myForEach(colors, function (color) {
  console.log(color);
});
Array.prototype.myForEach = function (func) {
  for (i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
friends = ["dc", "tl", "rc"];
friends.myForEach(alert);

friends.myForEach(function (name) {
  console.log("I love " + name);
});
