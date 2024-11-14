export default class Navigation {
    constructor() {
        this.showSection(window.location.hash);
        $(window).on("hashchange", () => {
            this.showSection(window.location.hash);
        });
    }
    showSection(hash) {
        // If no hash is provided, use the first section id
        if (!hash) {
            hash = "#" + $("section")[0].id;
            window.location.hash = hash;
        }
        $("section").hide();
        if ($(hash)[0]) {
            // If section with id = hash was found, show the section  
            $(hash).show();            
        } else {
            // If section with id = hash wasn´t found, show the notfound section
            $("#notfound").show();
            $("#hash").text(hash);
        }
    }
}