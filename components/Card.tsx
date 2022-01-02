import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div 
      className={styles.card}
      style={{backgroundColor: props.bgcolor ??"#fff"}}>
      {props.children}
    </div>
  )
}

export default Card;