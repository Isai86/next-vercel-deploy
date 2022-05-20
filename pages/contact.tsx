
import Link from 'next/link';
import { MainLayouts } from '../layouts/MainLayouts';

export default function ContactPage() {
  return (
        <MainLayouts>
        <h1>Contact Page</h1>
        <h1 className={'title'}>
         {/*  Ir a <a href="/">Home</a> */}
          ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>
        </MainLayouts>
  )
}
