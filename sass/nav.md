/*==================================================
                NAV BAR + HEADER
===================================================*/
/* Menu setup */
header {
    background: transparent;
    width: 100%;
}

/* Sticky menu setup */
header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    display: none;
    /* transform: translateY(-400%); */
    z-index: 100;
}

/* Animation menu to sticky menu */
body.scroll header.sticky {
    display: block;
    /*  transform: translateY(0); */
    transition: 0.8s;
}


.home {
    &__menu {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        height: 1000px;
        transform: translate3d(-100%, 0, 0);
        transition: 0.3s;

        &--trigger {
            background: url('../img/hamburger-icon.svg') no-repeat center / cover;
            width: 35px;
            height: 35px;
            display: block;
            z-index: 10;
            position: absolute;
            right: 10%;
            top: 35px;
            transition: 0.3s;


            &:hover {
                transform: scale(1.2);
            }
        }

        &--list {
            /* A menu elemei */
            display: inline-block;
            padding: 10px 0px 0 10px;
            transition: all 0.3;
            text-align: center;

            /* display: block;
            margin-top: 20px;
            padding-bottom: 20px; */
        }

        &--link {
            font-size: 1.75rem;
            position: relative;
            line-height: 1.2;
            font-weight: 300;
            display: inline-block;
            cursor: pointer;
            color: rgb(255, 255, 255);
            backface-visibility: hidden;
            letter-spacing: 0.5rem;
            transition: all 0.2s;

            &::before {
                background-color: rgb(255, 255, 255);
                content: "";
                position: absolute;
                top: 20px;
                left: 0;
                backface-visibility: hidden;
                height: 0.2rem;
                width: 0;
                transition: width 0.4s, transform 0.4s 0.7s;

            }

            &:hover::before {
                width: 100%;
                transform: translateY(-20px);
            }

            &:hover {
                color: rgb(255, 255, 255);
                text-decoration: none;
            }
        }
    }
}

.main-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(95, 93, 93, 0.815);
    z-index: 5;
    display: none;

    /* Az X gomb design */
    &::after {
        background: url('../img/close-icon.svg') no-repeat center / cover;
        width: 35px;
        height: 35px;
        display: block;
        z-index: 20;
        position: fixed;
        content: "";
        right: 12%;
        z-index: 41;
        top: 35px;
    }
}


/* Az előbújó menü ahová érkezik */
body.menu-js-active .home__menu {
    transform: translate3d(50%, 0, 0);
    display: block;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    width: 50%;
}

body.menu-js-active .main-overlay {
    display: block;

}

body.menu-js-active .home__menu--trigger {
    display: none;
}