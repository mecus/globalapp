export class News {

    static render() {
        let headLines = document.createElement('section');
        headLines.setAttribute('id', 'news');
        headLines.setAttribute('class', 'news-container');
        headLines.innerHTML = `
        <div class="title-tag">
            <h1>Headlines</h1>
            <div class="news-wrapper">
                <div class="news-item"></div>
                <div class="news-item"></div>
                <div class="news-item"></div>
            </div>
        </div>
        `
        return headLines;
    }
}