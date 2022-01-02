export default class DoorModel {
  #number: number
  #hasGift: boolean
  #selected: boolean
  #open: boolean

  constructor(number: number, hasGift = false, selected = false, open = false){
    this.#number = number
    this.#hasGift = hasGift
    this.#selected = selected
    this.#open = open
  }

  get number() {
    return this.#number
  }

  get hasGift() {
    return this.#hasGift
  }

  get selected() {
    return this.#selected
  }

  get opened() {
    return this.#open
  }

  get closed() {
    return !this.#open
  }

  deselect() {
    const selected = false
    return new DoorModel(this.number, this.hasGift, selected, this.opened)
  }

  toggleSelection() {
    const selected = !this.selected
    return new DoorModel(this.number, this.hasGift, selected, this.opened)
  }

  open() {
    const open = !this.opened
    return new DoorModel(this.number, this.hasGift, this.selected, open)
  }
}