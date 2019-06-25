export class About {

    static render() {
        let aboutSection = document.createElement('section');
        aboutSection.setAttribute('class', 'about-container');
        aboutSection.setAttribute('id', 'about');
        aboutSection.innerHTML = `
        <div class="about">
            <div class="about-image">
                <div class="image-title">
                    <h2>Tony Dike</h2>
                    <p>Principal Associate</p>
                </div>
            </div>
            <div class="about-text">
                <h1>Global Solicitors</h1>
                <p>We are naturally pro-active and our business is managed to specifically promote the highest quality of service. We hold accreditations for the Law Society’s quality standard LEXCEL and the Investors in People quality management system. One of very few law firms to hold both awards.</p>
                <p>Our clients include entrepreneurs, small and medium-sized family and privately owned businesses, publicly quoted companies, major institutions, significant families and private individuals in the UK and overseas.</p>

                <h2>- For General Enquiries Call 02988466546</h2>
            </div>
        </div>
    `;
        return aboutSection;
    }
}