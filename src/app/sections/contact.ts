
export class Contact {

    static render() {
        let appContact = document.createElement('section');
        appContact.setAttribute('id', 'contact');
        appContact.setAttribute('class', 'contact-container');
        appContact.innerHTML = `
        <div class="title-tag">
        <h1>Contact us</h1>
        </div>
        <div class="contact">
            <div class="contact-element">
                <div class="address">
                    <h2>160 New Cross Road</h2>
                    <h2>SE14 5AR</h2>
                    <h2>London</h2>
                </div>
                <div class="email-tel">
                    <p>Email: info@globalsolicitors.co.uk</p>
                    <p>Tel: 0208784764524, 07864556243</p>
                </div>
                <div class="contact-social">
                </div>
            </div>
            <div class="contact-element">
            <form action="">
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">
                <textarea placeholder="Message" name="" id="" cols="30" rows="10">
  
                </textarea>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        `;
        return appContact;
    }
}