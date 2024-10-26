:root {
    --primary: #00B98E;
    --dark-primary: #044738;
    --secondary: #FF6922;
    --light: #EFFDF5;
    --dark: #0E2E50;
    --black: #000;
    --white: #fff;

    /* Fonts */
    --ff-poppins: "Poppins", sans-serif;
    --ff-roboto: "Roboto", sans-serif;
}

body {
    font-family: var(--ff-poppins);
}

.primary-navigation {
    width: 100vw;
    background: var(--white);
}

.logo {
    font-family: var(--ff-poppins);
    font-weight: 900;
    user-select: none;

    /* border: #FF6922 solid 1px; */
}

.logo span {
    color: var(--primary);
}

ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    user-select: none;
    /* text-transform: uppercase; */
}

li a {
    text-decoration: none;
    color: var(--black);
}

.link + .link {
    margin-left: 1rem;
}

.primary:focus {
    border-bottom: var(--primary) 3px solid;
    padding-bottom: 1rem;
    padding-inline: .2rem;
}

.link:hover {
    color: #00B98E;
    transition: .3s;
}

.sign-up {
    color: var(--white);
    background: var(--primary);
    padding: .5rem 1rem;
    border-radius: 5px;
}

.sign-up:hover {
    color: var(--white);
    background: var(--dark-primary);
}

.nav-bar {
    position: relative;
    /* margin-top: 45px; */
    padding: 1rem 2rem;
    transition: .5s;
    z-index: 9999;
    box-shadow: 0 0 30px rgba(0, 0, 0, .4);
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}

.mobile-links {
    display: none;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}


@media only screen and (max-width: 800px) {
    .main-links,
    .user-links {
        display: flex;
        flex-direction: column;
    }

    .mobile-nav-toggle[aria-expanded="false"] {
        display: block;
        cursor: pointer;
        position: absolute;
        z-index: 9999;
        top: 1rem;
        right: clamp(1.5rem, 4vw, 3rem);
        background-image: url('../assets/icon-hamburger.svg');
        background-repeat: no-repeat;
        width: 1.4rem;
        aspect-ratio: 1;
        background-color: transparent;
        border: 0;
    }

    .mobile-nav-toggle[aria-expanded="true"] {
        background-image: url('../assets/shared/icon-close.svg');
        display: block;
        cursor: pointer;
        position: absolute;
        z-index: 9999;
        top: 1rem;
        right: clamp(1.5rem, 4vw, 3rem);
        background-repeat: no-repeat;
        width: 1.4rem;
        aspect-ratio: 1;
        background-color: transparent;
        border: 0;
    }

    .sign-up {
        color: var(--black);
        background: transparent;
        padding: 0;
        
    }

    .sign-up:hover {
        color: var(--primary);
        background: transparent;
    }
    
    
}
