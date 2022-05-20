import Link from 'next/link';
import { MainLayouts } from '../layouts/MainLayouts';

export default function HomePage() {
  return (
   <MainLayouts>
      <h1>Home Page</h1>
        <h1 className={'title'}>
          {/* Ir a <a href="/about">About</a> */}
          ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>
   </MainLayouts>
  )
}
