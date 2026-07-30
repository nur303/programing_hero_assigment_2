function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= 500) {
    return 0;
  }
  const extraTokens = tokensUsed - 500;
  const billableBlocks = Math.floor(extraTokens / 100);
  const totalCost = billableBlocks * 5;

  return totalCost;
}

// Sample Test Cases
console.log(calculateAiCost(300));    // Output: 0
console.log(calculateAiCost(500));    // Output: 0
console.log(calculateAiCost(650));    // Output: 5
console.log(calculateAiCost(1000));   // Output: 25
console.log(calculateAiCost(-10));    // Output: "Invalid"
console.log(calculateAiCost("500"));  // Output: "Invalid"