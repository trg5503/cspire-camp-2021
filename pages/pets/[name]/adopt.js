import { useRouter } from 'next/router'
import { useState, createRef } from 'react'
import styles from '../../../styles/PetDetails.module.css'

export default function PetAdopt() {
    const router = useRouter();
    const query = router.query; // pet name is query.name (.toLowerCase() to get lowercase name)

    // ultra lazy mode
    const [ check1, setCheck1 ] = useState(false);
    const [ check2, setCheck2 ] = useState(false);
    const [ check3, setCheck3 ] = useState(false);

    // get element ref to be able to print pdf later
    const pdfRef = createRef();

    return (
        <div className={styles.container} style={{
            flexDirection: 'column'
        }}>
            {/* hidden pdf for later printing */}
            <iframe
                src="/adopt.pdf"
                ref={pdfRef}
                style={{
                    display: 'none'
                }}
                width="0"
                height="0" />

            {/* visible page content */}
            <div className={styles.description}>
                <p>
                    When it comes to adoption, it is a wonderful process that fills a home with love and joy.
                    We need to first make sure that your home is ready to recieve such joy though.
                </p>

                <p>
                    We want you to know that all animals have been spayed and neutered,
                    they have all recieved thier first shots, and have been microchipped. 
                </p>
                <form>
                    <input name='check1' checked={check1} type='checkbox' onClick={() => setCheck1(!check1)} />
                    <label htmlFor='check1' onClick={() => setCheck1(!check1)}>I understand that all animals have been or will be spayed and neutered.</label>

                    <br />

                    <input name='check2' checked={check2} type='checkbox' onClick={() => setCheck2(!check2)} />
                    <label htmlFor='check2' onClick={() => setCheck2(!check2)}>I understand that adopting an animal requires a payment of $35 for their first shot and microchip.</label>

                    <br />

                    <input name='check3' checked={check3} type='checkbox' onClick={() => setCheck3(!check3)} />
                    <label htmlFor='check3' onClick={() => setCheck3(!check3)}>I understand that an interview is required before adopting an animal.</label>
                </form>

                <br />

                <button className={styles.actionButton} disabled={!(check1 && check2 && check3)}
                    onClick={() => {
                        (check1 && check2 && check3) ? (
                            pdfRef.current.contentWindow.print()
                        ) : (
                            window.alert('You must agree to all statements before continuing.')
                        )
                    }}
                >Print Form</button>
            </div>
        </div>
    )
}