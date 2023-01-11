import React from 'react';

import PrimaryMenu from '../PrimaryMenu'


function Header() {
  return (
        <header class="site-header header mo-left">
            <div class="sticky-header top-bar bg-primary text-white">
                <div class="container">
                    <div class="row d-flex justify-content-between">
                        <div class="dlab-topbar-left">
                            <ul>
                                <li><i class="fa fa-phone m-r5"></i> +8801727-584399</li>
                                <li><i class="fa fa-envelope m-r5"></i>architecturalpoint2022@gmail.com</li>
                            </ul>
                        </div>
                        {/* <!-- */}
                        <div class="dlab-topbar-right topbar-social">
                            <ul>
                                <li><a target="_blank" href="https://www.facebook.com/" class="site-button-link facebook hover"><i class="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/" class="site-button-link youtube hover"><i class="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    {/* --> */}
                    </div>
                </div>
            </div>
            {/* <!-- main header --> */}
            <PrimaryMenu />
            {/* <!-- main header END --> */}
        </header>
  )
}

export default Header