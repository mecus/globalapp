
export class AppNavigation {
    constructor(){
        // this.urlStateChanges();
    }
    urlStateChanges(){
        window.addEventListener("popstate", (e) => {
            console.log(e);
        });
    }
    
    static render() {
        let appNav = document.createElement('section');
        appNav.setAttribute('id', 'app-nav');
        appNav.innerHTML =`
            <div class="nav-container">
                <div class="nav container">
                    <div class=brand>
                    <a href="/#">Global Solicitors</a>
                    </div>
                    <div class="empty"></div>
                    <div class="nav-items">
                        <a class="active" href="#about">About</a>
                        <a href="#service">Service</a>
                        <a href="#contact">Contact</a>
                        <a href="#testimony">Testimony</a>
                        <a href="#news">News</a>
                    </div>
                    <span class="mobile-menu">
                    <i class="fa fa-bars"></i>
                    </span>
                </div>
            </div>
        `
        return appNav;
    }
}
