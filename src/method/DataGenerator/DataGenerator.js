import React from 'react'

const DataGenerator = () => {
        
    function randomProfile() {
        return {
            key: faker.datatype.uuid(),
            name: faker.commerce.price(10, 500, 2, 'Birr '),
            // name: faker.internet.userName(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            purchaseDate: faker.date.past(),
            jobTitle: faker.name.jobTitle(),
        }
    }

    const profile = function (max_size) {
        const  users = [];
        for (let index = 0; index < max_size; index++) {
            users.push(randomProfile());
    }
    return users;
};

const users_group = profile(50);


  return users_group;
}

export default DataGenerator