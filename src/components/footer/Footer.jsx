import React from 'react'

function Footer() {
    return (
        <div className='bg-bg p-4 text-text flex-cols items-center text-center justify-items-center content-center justify-center'>

            <div class="flex items-center justify-center flex-shrink-0  text-text mr-6">
                <img
                    className="fill-current h-8 w-8 mr-2"
                    width="94"
                    height="94"
                    alt='MY LOGO'
                    src='/images/logo.png'
                />
                <span class="font-semibold hidden lg:block text-2xl tracking-tight">SIWES CLASSIFICATION SYSTEM</span>
                <span class="font-semibold block lg:hidden tracking-tight">SIWES CS</span>
            </div>
            &copy; 2021, SCS All Rights Reserved
        </div>
    )
}

export default Footer
