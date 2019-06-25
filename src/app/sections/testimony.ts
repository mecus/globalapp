export class Testimony {

    static render() {
        let appTestinomy = document.createElement('section');
        appTestinomy.setAttribute('id', 'testimony');
        appTestinomy.setAttribute('class', 'textimony-container');
        appTestinomy.innerHTML = `
            <div class="title-tag">
                <h1>Testimony</h1>
            </div>
            <div class="testimony">
                <div class="inner-text">
                    <p>
                    “We have found the service excellent, and it is for this reason we have continued to use Global Solicitors. The key strengths for us have been a commercial approach to deals that is often missing from solicitors, and a personal service based on a knowledge of us and our needs and long-term plans.”
                    </p>
                    <h2>Janny Hill</h2>
                </div>
            </div>
        `

        return appTestinomy;
    }
}