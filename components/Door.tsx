import styles from "../styles/Door.module.css"
import Gift from "./Gift"
import DoorModel from "../model/door";

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

const Door = (props: DoorProps) => {
  const door = props.value
  const selected = door.selected && !door.open ? styles.selected : ''

  const toggleSelection = e => props.onChange(door.toggleSelection())

  const open = e => {
    e.stopPropagation()
    props.onChange(door.open())
  }

  function renderDoor(){
    return (
      <>
        <div className={styles.door}>
          <div className={styles.number}>
            {door.number}
          </div>
          <div className={styles.doorhandle} onClick={open}>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.structure} ${selected}`}>
      {door.closed ? renderDoor() : door.hasGift ? <Gift></Gift> : false}
      </div>
      <div className={styles.ground}></div>
    </div>
  )
}

export default Door