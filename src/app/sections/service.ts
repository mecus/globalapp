// import '../temp/app.html';
export class Service {
    static render() {
        let styles = document.createElement('style');
        let serviceSection = document.createElement('div');
        serviceSection.setAttribute('id', 'service');
        serviceSection.setAttribute('class', 'service-container');
        serviceSection.innerHTML = `
        <div class="title-tag">
            <h1>Services</h1>
        </div>
        <div class="service">
            <div class="item">
            <div class="name-tag">
                <h1>Family / Divorce</h1>
            </div>

            </div>
            <div class="item">
            
            <div class="name-tag">
                <h1>Immigration</h1>
            </div>
            </div>
            <div class="item">
            
            <div class="name-tag">
                <h1>Criminal Law</h1>
            </div>
            </div>
            <div class="item">
            
            <div class="name-tag">
                <h1>Housing</h1>
            </div>
            </div>
            <div class="item">
            
            <div class="name-tag">
                <h1>Business Law</h1>
            </div>
            </div>
        </div>
        `
        styles.textContent = `
            .service-container {
                padding: 50px 0px;
            }
            .title-tag {
                width: 90%;
                margin: 0 auto;
            }
            .title-tag h1{
                text-align: center;
            }

        `
        serviceSection.appendChild(styles);
        return serviceSection;
    }
}