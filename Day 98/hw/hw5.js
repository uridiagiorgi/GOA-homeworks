function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
    this.getPerimeter = function() {
        return 2 * (this.width + this.height);
  };
}
const rect = new Rectangle(7, 3);
console.log(`S: ${rect.getArea()}`);      
console.log(`P: ${rect.getPerimeter()}`);