const cardWrapper = document.getElementById("card-wrapper");
// Create the contact list
let contactList = [
    {
        firstName: "Mohammed",
        lastName: "Ali",
        email: "mohammed.ali@example.com",
        phone: "123-456-7890"
    },
    {
        firstName: "Amir",
        lastName: "Hassan",
        email: "amir.hassan@example.com",
        phone: "234-567-8901"
    },
    {
        firstName: "Fouad",
        lastName: "Jawad",
        email: "fouad.jawad@example.com",
        phone: "345-678-9012"
    }
];

// Display the entire list in the console
contactList.forEach(function () {

});

// create card div
const div = document.createElement("div");
div.className = "";

div.innerHTML = `
    <div class="bg-cover w-20 h-20 justify-between mr-6" style=" background-image: url('Assets/icone/profil.png')">
                    
    </div>
    <div class="text-justify ">
        <p class="text-lg md:text-xl font-bold"> Contact Info</p>
        <p class="text-sm md:text-base">Nom et Prenom :  </p>
        <p class="text-sm md:text-base">Numero de Telephone :</p>
        <p class="text-sm md:text-base">Email :</p>
    </div>
`;

// append div as a child
// ${}
cardWrapper.appendChild(div);