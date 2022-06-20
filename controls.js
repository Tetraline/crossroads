class Controls {
  constructor(type) {
    this.forward = false;
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;
    this.type = type;
    switch (type) {
      case "vertical":
        this.forward = true;
        break;

      default:
        break;
    }
  }
}
