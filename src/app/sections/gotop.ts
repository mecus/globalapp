export class GoTop {

    static render() {
        let gotop = document.createElement('div');
        let styles = document.createElement('style');
        gotop.setAttribute('class', 'gotop');
        styles.textContent = `
        .gotop{
            position: fixed;
            right: 0;
            bottom: 0px;
            margin-bottom: 50px;
            margin-right: 20px;
        }
        .top{
            opacity: 0;
        }
        .top a{
            border-radius: 50%;
        }
        .top a i{
            font-size: 25px;
            // padding-top: 10px;
            background-color: #0573CE;
            height: 30px;
            width: 30px;
            text-align: center;
            border-radius: 50%;
            color: #f7f7f7;
        }
        .top a i:hover{
            background-color: rgba(0, 0, 0, 0.5);
        }
        `;
        gotop.innerHTML = `
            <div class="top" id="top">
                <a href="#">
                <i class="fa fa-angle-up"></i>
                </a>
            </div>
        `;
        gotop.appendChild(styles);
        return gotop;
    }
}