module.exports = class DepthCalculator {
  maxDepth = 0;
  currentDepth = 0;

  calculateDepth(arr) {
    this.currentDepth++;
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
          this.calculateDepth(element);
        }
      }
    }

    if (this.currentDepth > this.maxDepth) {
      this.maxDepth = this.currentDepth;
    }
    this.currentDepth--;

    if (this.currentDepth == 0) {
      const maxDepthInCycle = this.maxDepth;
      this.maxDepth = 0;
      return maxDepthInCycle;
    }
  }
};