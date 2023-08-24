// 利用 js map 有存储顺序哈希表的特性
class LRUCache {
  private map: Map<number, number>
  private size: number
  constructor(capacity: number) {
      this.map = new Map<number, number>()
      this.size = capacity
  }

  get(key: number): number {
      if (this.map.has(key)) {
          const value = this.map.get(key) as number
          this.map.delete(key)
          this.map.set(key, value)
          return value
      }
      return -1
  }

  put(key: number, value: number): void {
      if (this.map.has(key)) {
          this.map.delete(key)
      }
      this.map.set(key, value)
      if (this.map.size > this.size) {
          this.map.delete(this.map.keys().next().value)
      }
  }
}