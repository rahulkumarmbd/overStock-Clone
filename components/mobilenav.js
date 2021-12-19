function mobileNav() {
  return `  <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style="width: 70%; height: 100vh"
    >
      <div class="MobileNavDrawer iconBar">
        <img
          src="https://i.postimg.cc/kXkkYv3f/Overstock-Logo-1.png"
          height="100%"
        />
      </div>
      <div class="">
        <div
          class="MobileNavDrawerLink MobileNavDrawertitleLink"
          style="display: flex"
        >
          Categories
        </div>
        <div
          class="
            MobileNavDrawer_testSubDrawer_44
            MobileNavDrawer_CategoriesDefault_80
          "
        >
          <div
            class="MobileNavDrawerlevelOne"
            style="height: 100%; transition: height 300ms ease-out 0s"
          >
            <div>
              <div class="MobileNavDrawerLink" ${(
                  onclick="page(`Furniture`)")}>
                <span>Furniture</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink"  ${(onclick = "page(`Rugs`)")}>
                <span>Rugs</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Home Decor`)")}>
                <span>Decor</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Bedding & Bath`)")}>
                <span>Bed &amp; Bath</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Home Improvement`)")}>
                <span>Home Improvement</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Kitchen & Dining`)")}>
                <span>Kitchen</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick = "page(`Outdoor`)")}>
                <span>Outdoor</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick = "page(`Jewelry`)")}>
                <span>Jewelry</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Lighting`)")}>
                <span>Lighting</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Gift Ideas`)")}>
                <span>Holiday &amp; Gifts</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Lighting`)")}>
                <span>Kids &amp; Baby</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div class="MobileNavDrawerLink" ${(onclick =
                "page(`Lighting`)")}>
                <span>More Categories</span
                ><svg
                  class="MobileNavDrawer_drillDownIcon_f2"
                  width="13"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="#2F3337"
                  fill="#2F3337"
                >
                  <title>Chevron Right</title>
                  <path
                    d="M7 2l10 10L7 22"
                    stroke="inherit"
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <a
              href=""
              data-tid="undefined:STICKY"
              class="MobileNavDrawerLink MobileNavDrawer_sale_33"
              >Sales &amp; Deals</a
            >
          </div>
        </div>
      </div>
      <div class="offcanvas-body"></div>
    </div>`
}

export default mobileNav
