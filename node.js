class Node {
    constructor(item) {
        this.value = item;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);

        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
    }

    indexOf(value) {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (current.value === value)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }

    map(callback) {
        let curr = this.head;
        while (curr) {
            callback(curr)
            curr = curr.next;
        }
    }

    mapValues(callback) {
        let curr = this.head;
        while (curr) {
            callback(curr.value)
            curr = curr.next;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    fromArray(arr) {
        arr.forEach(item => {
            this.add(item)
        });
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Out of Indexed!')
        } else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.length--;
            return curr.value;
        }
    }

    get array() {
        const arr = []
        let curr = this.head;
        while (curr) {
            arr.push(curr.value)
            curr = curr.next;
        }
        return arr;
    }

    get size() {
        return this.length
    }

}

const list = new LinkedList();

list.add(2)
list.add(3)
list.add(4)

console.log({
    length: list
})