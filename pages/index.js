import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Personal Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <hr />
        <blockquote>
          <p class="margin-zero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </blockquote>
        <div className='row'>
          <div className='col'>
            <button class="button button-primary button-outline">button element</button>
          </div>
          <div className='col'>
            <button class="button button-secondary">button element</button>
          </div>
          <div className='col'>
            <span class="button button-primary">just a span</span>
          </div>
          <div className='col'>
            <a className="button button-danger" target='_blank' href="https://karmacss.com/buttons/">just a </a>
          </div>
        </div>
        
        <form className={styles.form}>
          <div class="row">
            <div class="col-sm-6">
              <label>Your name</label>
              <input class="full-width" type="text" placeholder="Bilbo Baggins" />
            </div>
            <div class="col-sm-6">
              <label>Date of birth</label>
              <input class="full-width" type="date" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label>Your email</label>
              <input class="full-width" type="email" placeholder="test@mailbox.com" />
            </div>
            <div class="col-sm-6">
              <label>Reason for contacting</label>
              <select class="full-width">
                <option value="">--------</option>
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
              </select>
            </div>
          </div>
          <label>Message</label>
          <textarea class="full-width" placeholder="Hi Dave …"></textarea>
          <input class="button button-primary" type="submit" value="Submit Form" />
        </form>
        
      </main>
    </div>
  )
}
