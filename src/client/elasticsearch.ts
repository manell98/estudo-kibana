import elasticsearch from 'elasticsearch';

function getClient() {
    return new elasticsearch.Client({
        host: 'localhost:9200',
        // log: 'trace'
    });
}

export default getClient;
