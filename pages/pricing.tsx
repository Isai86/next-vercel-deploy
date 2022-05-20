
import Link from 'next/link';
import { MainLayouts } from '../layouts/MainLayouts';

export default function PricingPage() {
  return (
        <MainLayouts>
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
         {/*  Ir a <a href="/">Home</a> */}
          ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
        </MainLayouts>
  )
}
