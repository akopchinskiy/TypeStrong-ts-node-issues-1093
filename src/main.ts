import got from 'got';

const loadData = async () => {
    const { body } = await got.get('https://reqres.in/api/users', {
        responseType: 'json'
    });

    console.log(body);
};

(async () => {
    loadData();
})()