

addPouchPlugin(require('pouchdb-adapter-leveldb')); // leveldown adapters need the leveldb plugin to work
const leveldown = require('leveldown');

const database = await createRxDatabase({
    name: 'mydatabase',
    storage: getRxStoragePouch(leveldown) // the full leveldown-module
});

const dogs = {
  keyCompression: true, // set this to true, to enable the keyCompression
  version: 0,
  title: 'human schema with composite primary',
  primaryKey: {
      // where should the composed string be stored
      key: 'id',
      // fields that will be used to create the composed key
      fields: [
          'firstName',
          'lastName'
      ],
      // separator which is used to concat the fields values.
      separator: '|'
  },
  type: 'object',
  properties: {
      id: {
          type: 'string'
      },
      firstName: {
          type: 'string'
      },
      lastName: {
          type: 'string'
      }
  },
  required: [
    'id', 
    'firstName',
    'lastName'
  ]
};



await database.addCollections({
dogs: {schema: dogs},

});

