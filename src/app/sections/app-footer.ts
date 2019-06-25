export class AppFooter {

    static render() {
        let appFooter = document.createElement('section');
        appFooter.setAttribute('class', 'footer-container');
        appFooter.innerHTML = `
        <div class="footer">
            <h2>Global Solicitors Ltd</h2>
            <h3>copyright 2018 Global Solicitors Allright Reserved</h3>
            <h4>
                Global Solicitors is authorised and regulated by the solicitors regulation authority 
            </h4>
            <h4>SRA NO. 628374</h4>
            <p>Powered by <a href="https://miscotech.co.uk" target="blank"> MISCOTECH </a></p>
        </div>
        `
        return appFooter;
    }
}