import DoorModel from "../model/door";

export const CreateDoors = (qtde: number, hasDoorGift: number): DoorModel[] => {
  return Array.from({length: qtde}, (_, i) => {
    const number = i + 1
    const hasGift = number === hasDoorGift
    return new DoorModel(number, hasGift)
  })
}

export const updateDoors = (doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] => {
  return doors.map(currentDoor => {
    const equalModified = currentDoor.number === modifiedDoor.number

    if(equalModified){
      return modifiedDoor
    } else {
      return modifiedDoor.open ? currentDoor : currentDoor.deselect()
    }
  })
}