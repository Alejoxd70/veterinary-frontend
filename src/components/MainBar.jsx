import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automation', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon }
]

export const MainBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>

      <header className='bg-white dark:bg-cyan-950 '>
        <nav
          aria-label='Global'
          className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        >
          <div className='flex lg:flex-1'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='text-gray-700 dark:text-gray-300 text-lg font-bold'>Veterinary 🐶</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300'
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          {/* Desktop menu */}
          <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
            <Popover className='relative'>
              <PopoverButton className='flex items-center gap-x-1 text-sm font-semibold text-gray-900 dark:text-gray-100'>
                Products
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className='absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700/50 data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in'
              >
                <div className='p-4'>
                  {products.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50 dark:hover:bg-gray-700'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900 dark:text-gray-100'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600 dark:text-gray-400'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 dark:divide-gray-700 bg-gray-50 dark:bg-gray-700'>
                  {callsToAction.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400 dark:text-gray-500'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              to='/pets'
              className='text-sm font-semibold text-gray-900 dark:text-gray-100'
            >
              Pets
            </Link>
            <a
              href='#'
              className='text-sm font-semibold text-gray-900 dark:text-gray-100'
            >
              About us
            </a>
            <a
              href='#'
              className='text-sm font-semibold text-gray-900 dark:text-gray-100'
            >
              Company
            </a>
          </PopoverGroup>

          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link
              to='/login'
              className='text-sm font-semibold text-gray-900 dark:text-gray-100'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className='lg:hidden'
        >
          <div className='fixed inset-0 z-10 bg-black/50' />
          <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-700/50'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='text-gray-700 dark:text-gray-300 text-lg font-bold'>Veterinary</span>
              </a>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(false)}
                className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300'
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10 dark:divide-gray-700'>
                <div className='space-y-2 py-6'>
                  <Disclosure as='div' className='-mx-3'>
                    <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'>
                      Product
                      <ChevronDownIcon
                        className='h-5 w-5 flex-none group-data-open:rotate-180'
                        aria-hidden='true'
                      />
                    </DisclosureButton>
                    <DisclosurePanel className='mt-2 space-y-2'>
                      {[...products, ...callsToAction].map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                        >
                          {item.name}
                        </a>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <a
                    href='#'
                    className='block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Features
                  </a>
                  <a
                    href='#'
                    className='block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Marketplace
                  </a>
                  <a
                    href='#'
                    className='block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Company
                  </a>
                </div>

                <div className='py-6'>
                  <a
                    href='#'
                    className='block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <Outlet />
      </div>
    </>

  )
}
