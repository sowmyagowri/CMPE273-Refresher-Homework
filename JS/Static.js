class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const point1 = new Point(5, 5);
  const point2 = new Point(10, 10);
  
  console.log("The Distance between the 2 points is", Point.distance(point1, point2));