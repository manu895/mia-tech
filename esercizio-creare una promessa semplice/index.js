function creaPromessa() {
    return new Promise((resolve) => {

        setTimeout(() => resolve("Promessa completata!"), 2000);
    });
    
}

creaPromessa().then(console.log);

