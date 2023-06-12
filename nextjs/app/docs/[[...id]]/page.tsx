import styles from './style.module.css'

const DocsLayout = ({ children }) => {
    return (
      <div>
        <div className={styles.title}>
          <h1>Docs Page {children}</h1>
          
        </div>
      </div>
    )
  }
  
  export default DocsLayout