import Link from 'next/link'
import styles from '../styles/DonateVolunteer.module.css'

export default function Volunteer() {
    return (
        <div className={styles.container}>
            <h1>Sign up to volunteer!</h1>
            <h3>Fill out the form below and we will contact you with more information.</h3>
            
            <details>
                <summary>Hours for Volunteering</summary>
                <p>Our operating hours are listed below, and during those times you can sign up through our form to choose when you are able to volunteer.</p>
                <p>
                    Monday - Friday: 9am - 4pm •
                    Saturday: 10am - 2pm
                </p>
            </details>
            <details>
                <summary>What can you do if you can not volunteer?</summary>
                <p>You can also <Link href='/donate'><span style={{
                    color: 'blue',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                }}>donate to the shelter</span></Link> if you don't have any spare time.</p>
            </details>
            <details>
                <summary>Where can I come volunteer?</summary>
                <p>
                    You can come to our animal shelter in person to volunteer at 123 Main Street, Starkville, MS.
                </p>
            </details>

            <details>
                <summary>Show Form</summary>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScK5HisZqd8RZdzjnH4Uy4yvyPX1n70ZIzIwuH6uSvWV-CcRA/viewform?embedded=true" width="100%" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Please wait...</iframe>
            </details>
        </div>
    )
}