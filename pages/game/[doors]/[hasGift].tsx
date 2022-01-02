import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { CreateDoors, updateDoors } from "../../../functions/doors"

const Game = () => {
  const router = useRouter()
  const [isValid, setIsValid] = useState(false)
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const hasGift = +router.query.hasGift

    const qdtValidDoors = doors >= 3 && doors <= 100
    const hasValidGift = hasGift >= 1 && hasGift <= doors

    setIsValid(qdtValidDoors && hasValidGift)
  }, [doors])

  useEffect(() => {
    const doors = +router.query.doors
    const hasGift = +router.query.hasGift
    setDoors(CreateDoors(doors, hasGift))
  }, [router?.query])

  function renderDoors(){
    return isValid && doors.map(door => (
      <Door 
        key={door.number} 
        value={door}
        onChange={newDoor => {
          setDoors(updateDoors(doors, newDoor))
        }}/>
    ))
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  )
}

export default Game