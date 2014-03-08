function buildEmail(first, last, domain, tld) {
    var a = "@";
    var d = ".";

    document.write('<a href="mailto:'+first+d+last+'+wpage'+a+domain+d+tld+'">'+first+d+last+'+wpage'+a+domain+d+tld+'</a>');
}
