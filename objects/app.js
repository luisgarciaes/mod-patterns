let client = {
    name: 'Luis',
    lastName:'García',
    getName: function(){
        return `${this.name} `+ `${this.lastName}`
    },
    address: {
        street: 'Abasolo 849',
        colony: 'El Moralete',
        postalCode: 2860,
        municipality:'Colima'
    }
}
console.log(client.address)