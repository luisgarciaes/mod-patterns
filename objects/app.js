let client = {
    name: 'Luis',
    lastName:'García',
    address: {
        street: 'Abasolo #849',
        colony: 'El Moralete',
        postalCode: 2860,
        municipality:'Colima'
    },
    getName: function(){
        return `${this.address.street} `+'Colonia: '+ `${this.address.colony} ` + 'CP: '+ `${this.address.postalCode}` + ',' +  `${this.address.municipality}`
    }
}
console.log(client.getName()) 