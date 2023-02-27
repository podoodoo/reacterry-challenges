###Array.prototype.map

In this coding challenge, you will be implementing a custom myMap method for JavaScript arrays. The myMap method should behave similarly to the built-in map method, but should be implemented from scratch without using the built-in method.

The myMap method should take a callback function as its argument, and should apply the callback function to each element in the array, in the order in which they appear. The callback function should take three arguments: the current element, the index of the current element, and the array on which myMap was called. The callback function should return a value, which will be used to populate the new array returned by myMap.

The myMap method should return a new array containing the values returned by the callback function for each element in the original array. The new array should have the same length as the original array, and its elements should be in the same order as the original array.

Your implementation should be written as an extension to the Array.prototype, so that the myMap method can be called on any array.

Directions
You may not use the built-in mapmethod or any other array methods in your implementation of myMap
Your implementation should not modify the original array
Your implementation should be efficient and avoid unnecessary looping and variable creation
