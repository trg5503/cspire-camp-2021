import styles from '../styles/DonateVolunteer.module.css'

export default function Donate() {
    return (
        <div className={styles.container}>
            <h1>Donate Today!</h1>
            <h3>You can donate today in person or online with one of our accepted methods of payment listed below.</h3>
            
            <details>
                <summary>Cash</summary>
                <p>You can bring cash to us at our location at 123 Main Street.</p>
            </details>
            <details>
                <summary>Check</summary>
                <p>You can bring a check to us or mail one in at our location at 123 Main Street.</p>
            </details>
            <details>
                <summary>Credit or Debit Card</summary>
                <p>
                    We accept digital payment via PayPal.
                </p>
                <button style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '15px'
                }} onClick={() => window.alert('PayPal donations are not currently available, try again later.')}><img src="/img/paypal_donate.gif" alt="PayPal Donate button" /></button>
            </details>
            <details>
                <summary>What if I can not pay in cash?</summary>
                <p>You can always bring physical items such as dry and wet food,cat litter,and leashes for the animals to our location at 123 Main Street. We are also accept donations of medicine from veterinarians and other providers!</p>
            </details>
        </div>
    )
}