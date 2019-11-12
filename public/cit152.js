var contacts = {
    "addressBook" : [
        {
            "fName" : "Donald",
            "lName" : "Duck",
            "email" : "DDuck@disney.com",
        },
        {
            "fName" : "Mickey",
            "lName" : "Mouse",
            "email" : "MMouse@disney.com",
        },
        {
            "fName" : "Elmer",
            "lName" : "Fudd",
            "email" : "EFudd@disney.com",
        }
    ]
};

{"fName" : "Donald","lName" : "Duck","email" : "DDuck@disney.com",},{"fName" : "Mickey","lName" : "Mouse","email" : "MMouse@disney.com",},{"fName" : "Elmer","lName" : "Fudd","email" : "EFudd@disney.com"}

(function () {
    var object = contacts.addressBook;
    var contactsCount = object.length;
    target = document.getElementsByTagName("section")[0];
    var i;
    if (contactsCount > 0) {
        for (i = 0; i < contactsCount; i = i + 1) {
            var item = object[i];
            var fName = item.fName;
            var lName = item.lName;
            var email = item.email;
            target.innerHTML += '<p>' + "Name: " + fName + " " + lName + '</p>';
            target.innerHTML += '<p>' + "Email: " + email + '</p><br />';
        }
    }
})();

var fNameArray = [ "Donald", "Mickey", "Elmer"];
var lNameArray = [ "Duck", "Mouse", "Fudd"];
var emailArray = [ "DDuck@disney.com", "MMouse@disney.com", "EFudd@disney.com"];
var formatStart = "'";
var formatEnd = "'";
var i = 0;
var disneyString2 = '';

for (i = 0; i < fNameArray.length; i++) {
    disneyString2 = disneyString2.concat("{" + '"fName"' + ":" + '"' + fNameArray[i] + '"' + ", " + '"lName"' + ":" + '"' + lNameArray[i] + '"' + ", " + '"email"' + ":" + '"' + emailArray[i] + '",' + "}" + ",");
}
var disneyString2 = JSON.parse(formatStart + disneyString2.slice(0, -1) + formatEnd);
console.log(disneyString2)