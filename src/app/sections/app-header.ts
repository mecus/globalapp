export class AppHeader {

    static render() {
        let header = document.createElement('section');
        header.setAttribute('class', 'header');
        header.innerHTML = `
    <div class="jumbotron">
        <div class="jumbo-text">
        <h1>Professional Lawyers with your interest at heart</h1>
        </div>
    </div>
    <div class="clip-path-container">
        <div class="header-text" id="headertext">

        </div>
    </div>
    <div class="clip-right">
        <div class="header-text" id="headertext">
            <div class="text-content">
                <h1>Professional Lawyers with your interest at heart</h1>
            </div>
        </div>

        <div class="text-slide" id="text-slide">
            <div class="slide">
                <h1>Professional Lawyers with your interest at heart</h1>
            </div>
            <div class="slide">
                <h1>Proactive Lawyers</h1>
            </div>
            <div class="slide">
                <h1>We can defend you in any situation</h1>
            </div>
        </div>
    </div>
        `  
        return header;
    }
}