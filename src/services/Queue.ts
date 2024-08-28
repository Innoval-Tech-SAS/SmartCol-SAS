class Queue<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      console.error("Queue is empty");

      return undefined;
    }
    console.log("Now queue is empty");

    return this.items.shift();
  }

  front(): T | undefined {
    if (this.isEmpty()) {
      console.error("Queue is empty");

      return undefined;
    }

    return this.items[0];
  }

  print(): void {
    console.log(this.items.toString());
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

export const whatsAppQueue = new Queue<string>();

export const emailQueue = new Queue<string>();
