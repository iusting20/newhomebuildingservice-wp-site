import "./Utils/DOMMethods";
import Utility from "./Utils/Utility";
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import DOM from "./Utils/DOM";
import Helpers from "./Utils/Helpers";

class OW_StickyHeader {
    #scrollBarlatestTopPosition;

    constructor() {
        this.topbar = new Topbar();
        this.header = new Header();
        this.logo = new Logo();
    }

    start = () => {
        this.#scrollBarlatestTopPosition = Utility.scrollBarTopPosition();

        this.#setupEventListeners();
    };

    #setupEventListeners = () => {
        window.addEventListener("load", this.#onWindowLoad);
        window.addEventListener("hashchange", this.#onClickLoad);
        window.addEventListener("scroll", this.#onWindowScroll);
        window.addEventListener("resize", this.#onWindowResize);
        window.addEventListener("orientationchange", this.#onWindowResize);
    };

    #onClickScrollOffset = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (Helpers.upStickyEffect()) {
            return;
        }
        const stickyOffset = DOM.headerWrapper.offsetHeight;

        let target = document.querySelector( ':target' );

        if ( target ) {
            target.style["scroll-margin-top"] = stickyOffset + 'px';

            target.scrollIntoView({
                top: stickyOffset,
                behavior: 'smooth'
            })
        }

        document
        .querySelectorAll('a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"]), #mobile-dropdown a[href*="#"]:not([href="#"])')
        .forEach(navLink => {
            if (
                !navLink.classList.contains("omw-open-modal") &&
                !navLink.closest(".omw-open-modal") &&
                !navLink.classList.contains("oew-modal-button") &&
                !navLink.closest(".oew-modal-button") &&
                !navLink.classList.contains("opl-link") &&
                !navLink.parentNode.classList.contains("opl-link")
              ) {
                return;
            }
            navLink.addEventListener("click", (e) => {
               e.preventDefault();
               e.stopPropagation();
                const href = navLink.getAttribute("href");
                let anchorId = '';
                if ( href ) {
                    anchorId = document.querySelector(href);
                }
                if ( anchorId ) {
                    anchorId.style["scroll-margin-top"] = stickyOffset + 'px';
                    anchorId.scrollIntoView({
                        top: stickyOffset,
                        behavior: 'smooth'
                    })
                }
            });
        });


    };

    #onWindowLoad = (e) => {
        this.topbar.createStickyWrapper();
        this.header.createStickyWrapper();
        this.header.addVerticalHeaderSticky();
        this.logo.setMaxHeight();
        this.#onClickScrollOffset(e);
    };

    #onClickLoad = (e) => {
        this.#onClickScrollOffset(e);
    };


    #onWindowScroll = () => {
        if (Utility.scrollBarTopPosition() != this.#scrollBarlatestTopPosition) {
            this.topbar.sticky();
            this.header.sticky();
            this.header.stickyEffects();
            this.header.addVerticalHeaderSticky();

            this.#scrollBarlatestTopPosition = Utility.scrollBarTopPosition();
        }

    };

    #onWindowResize = () => {
        this.topbar.updateSticky();
        this.header.updateSticky();
    };
}

("use strict");

const stickyHeader = new OW_StickyHeader();
stickyHeader.start();
