function averageResponseTime(times) {
  // Bug 1: Array.isArray(times) = false এর বদলে !== বা ! ব্যবহার করতে হবে (Assignment এর বদলে Comparison)
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  // Bug 2: times.length = 0 এর বদলে === ব্যবহার করতে হবে (Assignment এর বদলে Comparison)
  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  
  // Bug 3 & 4: Array-এর ইনডেক্স 0 থেকে শুরু হয়, তাই i = 0 এবং i < times.length হবে (<= হবে না)
  for (let i = 0; i < times.length; i++) {
    // Challenge Requirement: Array-এর মধ্যে Number ছাড়া অন্য কিছু থাকলে "Invalid" রিটার্ন করবে
    if (typeof times[i] !== 'number') {
      return "Invalid";
    }
    
    // Bug 5: time[i] লেখা ছিল, কিন্তু ভেরিয়েবলের নাম times, তাই times[i] হবে
    total = total + times[i];
  }

  // Bug 6: total কে times (যা একটি array) দিয়ে ভাগ করা হয়েছিল, একে times.length (array-এর সাইজ) দিয়ে ভাগ করতে হবে
  return total / times.length;
}

// Sample Test Cases
console.log(averageResponseTime([120, 200, 150, 130])); // Output: 150
console.log(averageResponseTime([100, 100]));           // Output: 100
console.log(averageResponseTime([]));                   // Output: "Invalid"
console.log(averageResponseTime("logs"));               // Output: "Invalid"
console.log(averageResponseTime([120, "200", 150]));    // Output: "Invalid"